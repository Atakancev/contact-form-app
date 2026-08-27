'use client';

import { useLayoutEffect } from 'react';

const BOLD_PATTERN = /\*\*([^*\n]+?)\*\*/g;
const SKIP_TAGS = new Set(['CODE', 'PRE', 'SCRIPT', 'STYLE', 'TEXTAREA']);

function renderMarkdownBold(root: HTMLElement) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];

  while (walker.nextNode()) {
    const node = walker.currentNode as Text;
    const parent = node.parentElement;

    if (
      node.nodeValue?.includes('**') &&
      parent &&
      !SKIP_TAGS.has(parent.tagName)
    ) {
      nodes.push(node);
    }
  }

  for (const node of nodes) {
    const value = node.nodeValue ?? '';
    const matches = Array.from(value.matchAll(BOLD_PATTERN));

    if (matches.length === 0) continue;

    const fragment = document.createDocumentFragment();
    let cursor = 0;

    for (const match of matches) {
      const index = match.index ?? 0;

      if (index > cursor) {
        fragment.appendChild(document.createTextNode(value.slice(cursor, index)));
      }

      const strong = document.createElement('strong');
      strong.textContent = match[1];
      fragment.appendChild(strong);

      cursor = index + match[0].length;
    }

    if (cursor < value.length) {
      fragment.appendChild(document.createTextNode(value.slice(cursor)));
    }

    node.parentNode?.replaceChild(fragment, node);
  }
}

export default function LegalInlineFormatting() {
  useLayoutEffect(() => {
    const root = document.querySelector<HTMLElement>('[data-tycoonx-legal-root]');
    if (!root) return;

    renderMarkdownBold(root);

    const observer = new MutationObserver(() => renderMarkdownBold(root));
    observer.observe(root, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
