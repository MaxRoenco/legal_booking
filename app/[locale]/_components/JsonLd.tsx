// Date structurate pentru Google (schema.org) ca <script type="application/ld+json">
export default function JsonLd({ data }: { data: object }) {
    return (
        <script
            type="application/ld+json"
            // "<" escapat, ca textul din JSON să nu poată închide tag-ul <script>
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(data).replace(/</g, "\\u003c"),
            }}
        />
    );
}
