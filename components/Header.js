import Link from "next/link";

export default function Header() {
  return (
    <header id="header" className="bg-[#f9f6f2]">
      <div id="nav" className="flex">
        <div id="nav-part1">
          <Link href="/">
            {" "}
            <svg
              id="two-good"
              width="62"
              height="63"
              viewBox="0 0 62 63"
              fill="none"
            >
              <path
                d="M46.8316 0C42.9105 0 39.1501 1.59236 36.3775 4.42677C33.605 7.26119 32.0474 11.1055 32.0474 15.114C32.0474 19.1224 33.605 22.9667 36.3775 25.8011C39.1501 28.6355 42.9105 30.2279 46.8316 30.2279C50.7526 30.2279 54.513 28.6355 57.2856 25.8011C60.0582 22.9667 61.6158 19.1224 61.6158 15.114C61.6158 11.1055 60.0582 7.26119 57.2856 4.42677C54.513 1.59236 50.7526 0 46.8316 0Z"
                fill="currentColor"
              ></path>
              <path
                d="M14.793 0C10.872 0 7.11154 1.59236 4.33897 4.42677C1.56639 7.26119 0.00878906 11.1055 0.00878906 15.114C0.00878906 19.1224 1.56639 22.9667 4.33897 25.8011C7.11154 28.6355 10.872 30.2279 14.793 30.2279C18.714 30.2279 22.4744 28.6355 25.247 25.8011C28.0196 22.9667 29.5772 19.1224 29.5772 15.114C29.5772 11.1055 28.0196 7.26119 25.247 4.42677C22.4744 1.59236 18.714 0 14.793 0Z"
                fill="currentColor"
              ></path>
              <path
                d="M36.9805 32.7422L32.0366 37.7963L56.6819 62.9913L61.6258 57.9372L36.9805 32.7422Z"
                fill="currentColor"
              ></path>
              <path
                d="M56.6836 32.7485L32.0383 57.9435L36.9822 62.9976L61.6275 37.8026L56.6836 32.7485Z"
                fill="currentColor"
              ></path>
              <path
                d="M4.94386 32.7464L0 37.8005L24.6453 62.9955L29.5892 57.9414L4.94386 32.7464Z"
                fill="currentColor"
              ></path>
              <path
                d="M24.647 32.7527L0.00170898 57.9477L4.94557 63.0018L29.5909 37.8068L24.647 32.7527Z"
                fill="currentColor"
              ></path>
            </svg>
          </Link>
        </div>

        <div
          id="nav-part2"
          className="flex items-center bg-[#e1dbd6] rounded-xl px-2 mr-4 gap-4"
        >
          <div id="links">
            <Link href="/">Home</Link>
            <a href="#footer">About</a>

            <a
              className="flex gap-1"
              href="https://github.com/swapisticated"
              target="_blank"
            >
              Github
              <svg
                class="go2708325546 external-link-icon"
                width="8px"
                height="8px"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M1.6 0V0.8H6.636L0 7.436L0.564 8L7.2 1.364V6.4H8V0H1.6Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
