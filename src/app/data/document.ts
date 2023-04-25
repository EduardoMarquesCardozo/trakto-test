export interface IDocument {
    thumbs?: Thumb,
    pages?: [Page[]],
    id: string,
    updated_at: Date,
    title: string,
}
  
  
export interface Thumb {
    raw: string
    medium: string
    high: string
    low: string
}

export interface Page {
    page_index: number
    page_format_id: any
}
  