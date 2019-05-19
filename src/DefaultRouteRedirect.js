import React from 'react';
import { Redirect } from '@reach/router';

export default function DefaultRouteRedirect({
  to,
  isRelative = false,
  noThrow = false,
  uri,
}) {
  if (uri == null) return null;

  const cleanedURI = uri.slice(-1) === '/' ? uri.slice(0, uri.length - 1) : uri;

  return (
    <Redirect
      noThrow={noThrow}
      from="/"
      to={isRelative === true ? `${cleanedURI}/${to}` : to}
    />
  );
};