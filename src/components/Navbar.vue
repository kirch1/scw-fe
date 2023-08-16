<template>
  <header class="flex justify-between p-6 bg-neutral-100 shadow-md">
    <RouterLink class="text-3xl m-0 p-0" to="/">SportsCards.wiki</RouterLink>
    <nav class="grid content-center">
      <ul class="flex justify-end text-lg">
        <li class="hover:text-lime-500 cursor-pointer px-4">
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li class="hover:text-lime-500 cursor-pointer px-4">
          <RouterLink to="/sets">Sets</RouterLink>
        </li>
        <li class="hover:text-lime-500 cursor-pointer px-4">
          <RouterLink to="/collection">Collection</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
