export function isExternalUrl(href?: string | null): boolean {
  if (!href) return false;
  const trimmed = href.trim();
  // Treat http(s) and protocol-relative URLs (//example.com) as external
  return /^(?:https?:)?\/\//i.test(trimmed);
}

export function getLinkProps(href?: string | null): { target?: string; rel?: string } {
  return isExternalUrl(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {};
}

