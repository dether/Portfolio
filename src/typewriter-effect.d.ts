declare module "typewriter-effect" {
  import React from "react";

  interface Options {
    strings: string[];
    autoStart?: boolean;
    loop?: boolean;
    cursor?: string;
    delay?: number;
    deleteSpeed?: number;
    pauseFor?: number;
    skipAddStyles?: boolean;
    devMode?: boolean;
    wrapperClassName?: string;
    cursorClassName?: string;
  }

  interface TypewriterClass {
    typeString: (text: string) => this;
    deleteAll: () => this;
    start: () => this;
    pauseFor: (time: number) => this;
    typeString: (text: string) => this;
    deleteChars: (amount: number) => this;
    callFunction: (fn: () => void) => this;
  }

  const Typewriter: React.FC<{
    options?: Partial<Options>;
    onInit?: (typewriter: TypewriterClass) => void;
  }>;

  export = Typewriter;
}
