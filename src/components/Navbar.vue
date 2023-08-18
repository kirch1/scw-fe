<template>
  <header class="flex justify-center p-6 bg-slate-50 shadow-md">
    <div class="flex grow justify-between max-w-screen-lg">
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
    </div>
  </header>
</template>
