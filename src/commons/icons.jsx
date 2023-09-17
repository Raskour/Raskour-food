import React from "react";

export function CartIcon({ props }) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      class="icon"
    >
      <title>Shopping cart</title>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <circle cx="6" cy="19" r="2"></circle>
      <circle cx="17" cy="19" r="2"></circle>
      <path d="M17 17h-11v-14h-2"></path>
      <path d="M6 5l14 1l-1 7h-13"></path>
    </svg>
  );
}
