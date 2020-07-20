import React from 'react';

export const chevronDown = () => (
  <svg width="11" height="7" viewBox="0 0 11 7" fill="none">
    <path d="M1 1L5.5 5L10 1" stroke="#3C3E52" strokeWidth="2" />
  </svg>
);

export const chevronRight = () => (
  <svg width="7" height="11" viewBox="0 0 7 11" fill="none">
    <path d="M1 10L5 5.5L1 1" stroke="#3C3E52" strokeWidth="2" />
  </svg>
);

export const line = ({ size, color }: any) => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <line
      x1="1.29289"
      y1="14.0208"
      x2="14.0208"
      y2="1.29288"
      stroke="#E1E2EA"
      strokeWidth="2"
    />
  </svg>
);

export const circle = () => (
  <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
    <circle cx="10.5" cy="10.5" r="9.5" stroke="#E1E2EA" strokeWidth="2" />
  </svg>
);

export const box = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="1" y="1" width="14" height="14" stroke="#E1E2EA" strokeWidth="2" />
  </svg>
);

export const triangle = () => (
  <svg width="19" height="16" viewBox="0 0 19 16" fill="none">
    <path
      d="M2.13878 14.75L9.5 2L16.8612 14.75H2.13878Z"
      stroke="#E1E2EA"
      strokeWidth="2"
    />
  </svg>
);

export const text = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <line x1="6" y1="8" x2="6" y2="6" stroke="#E1E2EA" strokeWidth="2" />
    <line x1="18" y1="8" x2="18" y2="6" stroke="#E1E2EA" strokeWidth="2" />
    <line x1="12" y1="17" x2="12" y2="7" stroke="#E1E2EA" strokeWidth="2" />
    <line x1="5" y1="5" x2="19" y2="5" stroke="#E1E2EA" strokeWidth="2" />
    <line x1="9" y1="18" x2="15" y2="18" stroke="#E1E2EA" strokeWidth="2" />
  </svg>
);

export const frame = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <line x1="2" y1="4" y2="4" stroke="#E1E2EA" strokeWidth="2" />
    <line x1="2" y1="12" y2="12" stroke="#E1E2EA" strokeWidth="2" />
    <line x1="16" y1="4" x2="14" y2="4" stroke="#E1E2EA" strokeWidth="2" />
    <line x1="16" y1="12" x2="14" y2="12" stroke="#E1E2EA" strokeWidth="2" />
    <line
      x1="4"
      y1="2"
      x2="4"
      y2="1.19209e-07"
      stroke="#E1E2EA"
      strokeWidth="2"
    />
    <line
      x1="12"
      y1="2"
      x2="12"
      y2="1.19209e-07"
      stroke="#E1E2EA"
      strokeWidth="2"
    />
    <line x1="4" y1="16" x2="4" y2="14" stroke="#E1E2EA" strokeWidth="2" />
    <line x1="12" y1="16" x2="12" y2="14" stroke="#E1E2EA" strokeWidth="2" />
    <rect x="4" y="4" width="8" height="8" stroke="#E1E2EA" strokeWidth="2" />
  </svg>
);
