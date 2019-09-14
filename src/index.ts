// src/index.ts
import { setOutput, getInput } from '@actions/core';
import { resolve } from 'path';
import { sync } from 'glob';

async function helloWorld(): Promise<void> {
  const filenames = sync(`${process.env.GITHUB_WORKSPACE}`);
  for (const filename of filenames) {
    console.log(filename);
  }

  const input1 = getInput('input-1');
  console.log(`Input #1 is set to ${input1}`);
}

helloWorld();
