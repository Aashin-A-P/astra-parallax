function getVideoId(input: string) {
  try {
    const url = new URL(input);
    if (url.hostname.includes("youtu.be")) return url.pathname.slice(1);
    if (url.searchParams.get("v")) return url.searchParams.get("v") || input;
    const embed = url.pathname.match(/\/embed\/([^/?]+)/);
    return embed?.[1] || input;
  } catch {
    return input;
  }
}

export function YouTubeEmbed({ id, title, caption }: { id: string; title: string; caption?: string }) {
  const videoId = getVideoId(id);
  return (
    <figure className="my-8">
      <div className="aspect-video overflow-hidden rounded-lg border border-border bg-surface">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
      {caption ? <figcaption className="mt-2 text-sm text-muted">{caption}</figcaption> : null}
    </figure>
  );
}
