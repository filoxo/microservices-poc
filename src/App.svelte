<script>
	import { onMount } from 'svelte';
	import { links } from "svelte-routing";

	let urls = {
		conversations: '/conversations',
		dashboard: '/dashboard'
	}
	let currentUrl = window.location.pathname;
	$: atMessengerRoute = currentUrl.startsWith(urls.conversations)
	$: atDashboardRoute = currentUrl.startsWith(urls.dashboard)

	onMount(() => {
		const pushStateListener = window.addEventListener('pushState', function(e) {
			currentUrl = window.location.pathname
		})

		return () => {
			window.removeEventListener('pushState', pushStateListener)
		}
	})
</script>

<style>
nav {
	color: #fff;
	margin: 0 auto;
}
ul {
	display: flex;
	list-style: none;
	align-items: center;
	margin: 0;
	padding: 0 1rem;
}
li {
	margin: 0 1rem;
	padding: 1rem 0;
}
a {
	color: #999;
	text-decoration: none;
	transition: all .15s ease-in-out;
}
a[aria-current="true"],
a:hover {
	color: #eee;
}
#logo {
	--logo-size: 1.5rem;
	display: block;
	margin-bottom: calc(var(--logo-size) / -2);
	margin-top: calc(var(--logo-size) / -2);
	width: var(--logo-size);
}
</style>

<nav>
	<ul use:links>
		<li>
			<a href="/" aria-label="Go to Podium homepage">
				<svg id="logo" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><title>Podium</title><g><path d="M59.925 18.23c1.634 0 2.45-.433 3.018-1.097.532-.63.816-1.414.816-2.317 0-.903-.29-1.727-.82-2.357-.57-.67-1.39-1.1-3.02-1.1h-3.98c-.2 0-.35.15-.35.35v6.17c0 .19.16.35.35.35h3.98zm-4.332 3.29v5.38c0 .192-.158.35-.35.35H52.22c-.194 0-.352-.158-.352-.35V8.422c0-.19.158-.35.352-.35h7.55c2.938 0 4.667.714 5.94 2.042 1.143 1.166 1.796 2.915 1.796 4.7 0 1.78-.653 3.528-1.796 4.695-1.24 1.29-3.002 2.01-5.94 2.01h-4.177zm23.947 2.716c3.642 0 6.347-2.96 6.347-6.575 0-3.61-2.705-6.57-6.348-6.57s-6.35 2.96-6.35 6.58 2.7 6.58 6.34 6.58zm0-16.437c5.96 0 10.072 4.4 10.072 9.86 0 5.45-4.112 9.86-10.073 9.86-5.96 0-10.08-4.41-10.08-9.87 0-5.456 4.11-9.86 10.07-9.86zm19.43 16.16c2.29 0 3.862-.8 4.94-2.14.882-1.1 1.404-2.57 1.404-4.17 0-1.59-.522-3.07-1.405-4.16-1.08-1.348-2.65-2.14-4.94-2.14h-2.41c-.2 0-.35.154-.35.35v11.9c0 .19.15.35.35.35h2.41zm-.415 3.28h-5.72c-.193 0-.35-.16-.35-.35V8.42c0-.19.157-.35.35-.35h5.72c3.062 0 5.078.66 6.65 1.81 2.373 1.75 3.836 4.602 3.836 7.78 0 3.176-1.46 6.027-3.83 7.78-1.57 1.15-3.59 1.807-6.65 1.807zm13.68-18.83c0-.196.157-.35.35-.35h3.023c.193 0 .35.154.35.35V26.9c0 .19-.157.35-.35.35h-3.022c-.194 0-.352-.16-.352-.35V8.422m8 10.745V8.422c0-.19.158-.35.352-.35h3.022c.193 0 .352.16.352.35v11.02c0 1.754.47 2.82 1.27 3.56.826.795 1.985 1.234 3.283 1.234 1.296 0 2.455-.44 3.284-1.233.8-.74 1.27-1.807 1.27-3.56V8.423c0-.192.157-.35.35-.35h3.022c.19 0 .35.158.35.35v10.744c0 2.933-.89 4.958-2.49 6.384-1.49 1.32-3.62 1.98-5.8 1.98-2.18 0-4.307-.66-5.796-1.97-1.6-1.42-2.484-3.45-2.484-6.38m29.813-3.193c.115.153.31.153.424 0l5.83-7.6c.118-.154.37-.28.566-.28h2.697c.193 0 .35.16.35.35V26.93c0 .192-.16.35-.35.35h-3.02c-.194 0-.352-.158-.352-.35V14.92c0-.19-.096-.223-.213-.07l-5.51 7.143c-.117.15-.31.15-.427 0l-5.504-7.15c-.12-.15-.216-.12-.216.073V26.92c0 .193-.16.35-.35.35h-3.02c-.196 0-.35-.157-.35-.35V8.444c0-.192.154-.35.35-.35h2.695c.19 0 .445.126.562.28l5.83 7.6" fill="#333333" style="fill: rgb(255, 255, 255); display: none;"></path></g><g><path fill="#FFFFFE" d="M16.6,0.2H0.4C0.2,0.2,0,0.3,0,0.6v26.8c0,0.7,0.4,0.8,0.9,0.4l2.5-2.4l3.2-3.1c0.1-0.1,0.3-0.1,0.4-0.1h9.8 c5.9,0,10.5-5.1,10.5-10.9C27.2,5.3,22.5,0.2,16.6,0.2z M5.5,5.8c0-0.1,0.1-0.2,0.2-0.2h12.9c0.1,0,0.2,0.1,0.2,0.2v1.6 c0,0.1-0.1,0.2-0.2,0.2H5.8c-0.1,0-0.2-0.1-0.2-0.2V5.8z M18.9,16.3c0,0.1-0.1,0.2-0.2,0.2H5.8c-0.1,0-0.2-0.1-0.2-0.2v-1.6 c0-0.1,0.1-0.2,0.2-0.2h12.9c0.1,0,0.2,0.1,0.2,0.2V16.3z M21.6,11.9c0,0.1-0.1,0.2-0.2,0.2H5.8c-0.1,0-0.2-0.1-0.2-0.2v-1.6 c0-0.1,0.1-0.2,0.2-0.2h15.6c0.1,0,0.2,0.1,0.2,0.2V11.9z"></path></g></svg>
			</a>
		</li>
		<li><a href={urls.conversations} aria-current={atMessengerRoute}>Messenger</a></li>
		<li><a href={urls.dashboard} aria-current={atDashboardRoute}>Dashboard</a></li>
		<li><a href="/">Analytics</a></li>
		<li><a href="/">Reviews</a></li>
		<li><a href="/">Leaderboard</a></li>
	</ul>
</nav>