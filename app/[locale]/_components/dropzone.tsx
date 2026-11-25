import { useState, useCallback, DragEvent, ChangeEvent, ReactElement } from 'react';
import { X, File, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface FileWithPreview extends File {
  preview?: string;
}

type AllowedFileTypes = 
  | 'image/png'
  | 'image/jpg'
  | 'image/jpeg'
  | 'application/pdf'
  | 'application/msword'
  | 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';

const ALLOWED_TYPES: AllowedFileTypes[] = [
  'image/png',
  'image/jpg',
  'image/jpeg',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

const Dropzone = ({ onDrop }: { onDrop: (files: File[]) => void }): ReactElement => {
  const t = useTranslations('dropzone');
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isDragActive, setIsDragActive] = useState<boolean>(false);

  const MAX_FILES = 10;
  const MAX_SIZE = 50 * 1024 * 1024; // 50MB in bytes

  const handleFiles = useCallback((newFiles: FileList | null) => {

    const validateFile = (file: File): string | null => {
      if (!ALLOWED_TYPES.includes(file.type as AllowedFileTypes)) {
        return 'File type not supported. Please upload PNG, JPG, PDF, DOC, or DOCX files only.';
      }
      if (file.size > MAX_SIZE) {
        return 'File is too large. Maximum size is 50MB.';
      }
      return null;
    };

    if (!newFiles) return;
    const fileList = Array.from(newFiles);
    setError(null);

    // Check total number of files
    if (files.length + fileList.length > MAX_FILES) {
      setError(`Maximum ${MAX_FILES} files allowed`);
      return;
    }

    // Validate each file
    const validFiles: FileWithPreview[] = [];
    for (const file of fileList) {
      const error = validateFile(file);
      if (error) {
        setError(error);
        return;
      }
      validFiles.push(file);
    }

    // Add valid files to state
    setFiles(prev => [...prev, ...validFiles]);
    onDrop(validFiles); // Pass valid files to parent component
  }, [files, onDrop, MAX_SIZE, MAX_FILES]);

  const handleDrop = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(false);
    handleFiles(e.dataTransfer.files);
  }, [handleFiles]);

  const handleDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(true);
  }, []);

  const handleDragLeave = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(false);
  }, []);

  const removeFile = useCallback((indexToRemove: number) => {
    setFiles(prev => prev.filter((_, index) => index !== indexToRemove));
  }, []);

  return (
    <div className="w-full">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => document.getElementById('fileInput')?.click()}
        className={`
          w-full py-[24px]
          relative border-[0.49px] border-dashed border-[#C5C5C5] rounded-[4px]
          flex flex-col items-center justify-center
          transition-all duration-200 ease-in-out
          cursor-pointer
          bg-[#FAFAFF]
          ${isDragActive 
            ? 'border-blue-500 bg-[#e7e7ff]' 
            : 'border-gray-300 hover:bg-[#e7e7ff]'
          }
        `}
      >
        <input
          id="fileInput"
          type="file"
          multiple
          className="hidden"
          name="attachments"
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleFiles(e.target.files)}
          accept=".png,.jpg,.jpeg,.pdf,.doc,.docx"
        />
        <Image src="/svgs/paper_clip.svg" width={18} height={19} alt=""/>
        <p className="text-[12px] text-[#C1C1C1] mt-[6px] font-playfair">
          {t('dragFiles')} <span className='text-[#003D35] font-bold'>{t('browse')}</span>
        </p>
      </div>

      {/* Error display */}
      {error && (
        <Alert variant="destructive" className="mt-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* File list */}
      {files.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3">Uploaded Files</h3>
          <div className="space-y-2">
            {files.map((file, index) => (
              <div
                key={`${file.name}-${index}`}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <File className="w-5 h-5 text-gray-400" />
                  <span className="text-sm truncate max-w-xs">{file.name}</span>
                  <span className="text-xs text-gray-500">
                    ({(file.size / (1024 * 1024)).toFixed(2)} MB)
                  </span>
                  <CheckCircle className="w-4 h-4 text-green-500" />
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(index);
                  }}
                  className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                  type="button"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropzone;