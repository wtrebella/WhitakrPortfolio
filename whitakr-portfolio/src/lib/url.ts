export function isExternalUrl(href?: string | null): boolean {
  if (!href) return false;
  const trimmed = href.trim();
  // Treat http(s) and protocol-relative URLs (//example.com) as external
  return /^(?:https?:)?\/\//i.test(trimmed);
}

export function getLinkProps(href?: string | null): { target?: string; rel?: string } {
  return isExternalUrl(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {};
}

export function getYouTubeVideoId(href?: string | null): string | null {
    if (!href) return null;

    const trimmed = href.trim();

    try {
        const url = new URL(trimmed);
        const host = url.hostname.replace(/^www\./i, '').toLowerCase();

        if (host === 'youtube.com' || host === 'm.youtube.com') {
            return url.searchParams.get('v');
        }

        if (host === 'youtu.be') {
            const videoId = url.pathname.slice(1) || null;
            return videoId ?? null;
        }
    } catch {
        return null;
    }

    return null;
}

export function getYouTubeEmbedUrl(href?: string | null): string | null {
    const videoId = getYouTubeVideoId(href);
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
}

















































