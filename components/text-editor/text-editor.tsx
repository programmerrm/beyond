"use client";

export default function TextEdtor({ description }: any) {
    return <span dangerouslySetInnerHTML={{ __html: description }}></span>;
}
