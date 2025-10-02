import { type VariantProps } from 'class-variance-authority';
import { type ComponentPropsWithoutRef, forwardRef } from 'react';
import {
  chatMessageVariants,
  chatMessageContentVariants,
  chatMessageTimestampVariants,
} from './chat-message.classes';
import { type Role, type MultiModalContent } from './chat-message.types';
import { cn } from '../../utilities/cn';

export interface ChatMessageProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'content' | 'role'>,
    VariantProps<typeof chatMessageVariants> {
  role: Role;
  content: string | MultiModalContent[];
  hidden?: boolean;
  loading?: boolean;
  timestamp?: Date;
  showTimestamp?: boolean;
}

const LoadingDots = () => (
  <div className="flex items-center gap-1 px-2 py-1">
    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.3s]" />
    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.15s]" />
    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" />
  </div>
);

const renderContent = (content: string | MultiModalContent[], role: Role) => {
  if (typeof content === 'string') {
    return <div className={chatMessageContentVariants({ role })}>{content}</div>;
  }

  return (
    <div className="flex flex-col gap-1.5">
      {content.map((item, index) => {
        switch (item.type) {
          case 'text':
            return (
              <div key={index} className={chatMessageContentVariants({ role })}>
                {item.text}
              </div>
            );
          case 'image':
            return (
              <img
                key={index}
                src={item.url}
                alt={item.alt || 'Chat image'}
                className="max-w-full rounded-lg"
              />
            );
          case 'code':
            return (
              <div
                key={index}
                className="rounded-lg bg-slate-900 p-2 font-mono text-xs text-slate-100"
              >
                {item.language && (
                  <div className="mb-1.5 text-xs text-slate-400">{item.language}</div>
                )}
                <pre className="overflow-x-auto">
                  <code>{item.code}</code>
                </pre>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export const ChatMessage = forwardRef<HTMLDivElement, ChatMessageProps>(
  (
    {
      role,
      content,
      hidden = false,
      loading = false,
      timestamp,
      showTimestamp = false,
      className,
      ...props
    },
    ref,
  ) => {
    if (hidden) return null;

    return (
      <div
        ref={ref}
        className={cn(chatMessageVariants({ role, hidden }), className)}
        aria-label={`Message from ${role}`}
        {...props}
      >
        {role === 'user' && (
          <div className="flex flex-col items-end gap-0.5">
            {loading ? (
              <div className={chatMessageContentVariants({ role })}>
                <LoadingDots />
              </div>
            ) : (
              renderContent(content, role)
            )}
            {showTimestamp && timestamp && (
              <time
                className={chatMessageTimestampVariants({ role })}
                dateTime={timestamp.toISOString()}
              >
                {timestamp.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </time>
            )}
          </div>
        )}

        {role === 'assistant' && (
          <div className="flex flex-col gap-0.5">
            {loading ? (
              <div className={chatMessageContentVariants({ role })}>
                <LoadingDots />
              </div>
            ) : (
              renderContent(content, role)
            )}
            {showTimestamp && timestamp && (
              <time
                className={chatMessageTimestampVariants({ role })}
                dateTime={timestamp.toISOString()}
              >
                {timestamp.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </time>
            )}
          </div>
        )}

        {role === 'system' && (
          <div className="flex flex-col items-center gap-0.5">
            {loading ? (
              <div className={chatMessageContentVariants({ role })}>
                <LoadingDots />
              </div>
            ) : (
              renderContent(content, role)
            )}
            {showTimestamp && timestamp && (
              <time
                className={chatMessageTimestampVariants({ role })}
                dateTime={timestamp.toISOString()}
              >
                {timestamp.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </time>
            )}
          </div>
        )}
      </div>
    );
  },
);
ChatMessage.displayName = 'ChatMessage';
