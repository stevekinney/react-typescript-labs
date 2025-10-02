export type Role = 'user' | 'assistant' | 'system';

export interface TextContent {
  type: 'text';
  text: string;
}

export interface ImageContent {
  type: 'image';
  url: string;
  alt?: string;
}

export interface CodeContent {
  type: 'code';
  language?: string;
  code: string;
}

export type MultiModalContent = TextContent | ImageContent | CodeContent;

export interface ChatMessageData {
  role: Role;
  content: string | MultiModalContent[];
  hidden?: boolean;
  loading?: boolean;
  timestamp?: Date;
  id?: string;
}
