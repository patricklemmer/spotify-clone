'use client';

import Link from 'next/link';

import { DiGithubFull } from 'react-icons/di';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SlGlobe } from 'react-icons/sl';

const GitHubBlock = () => {
  return (
    <div className="flex flex-col justify-between px-5 py-4 text-neutral-400">
      <div>
        <p>View this project on</p>
        <Link
          href="https://github.com/patricklemmer/spotify-clone"
          target="_blank"
        >
          <DiGithubFull size={80} className="text-green-500" />
        </Link>
      </div>
      <div>
        <p>
          I plan on writing a detailed post about my experience developing this
          Spotify clone. Once ready, you will find it{' '}
          <a href="https://patricklemmer.dev/#blog" target="_blank">
            <b className="text-neutral-300">here</b>
          </a>
          .
        </p>
      </div>
      <div className="mt-6 flex justify-around">
        <Link href="https://www.linkedin.com/in/patricklemmer/" target="_blank">
          <FaLinkedinIn className="hover:text-white" />
        </Link>
        <Link href="https://twitter.com/patrick_lemmer" target="_blank">
          <FaTwitter className="hover:text-white" />
        </Link>
        <Link href="https://github.com/patricklemmer" target="_blank">
          <FaGithub className="hover:text-white" />
        </Link>
        <Link href="https://patricklemmer.dev" target="_blank">
          <SlGlobe className="hover:text-white" />
        </Link>
      </div>
    </div>
  );
};

export default GitHubBlock;
