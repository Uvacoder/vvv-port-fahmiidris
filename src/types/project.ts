import type { ImageProps } from 'next/future/image';

import type { MDXMetaType } from '@/types/seo';

export type ProjectType = 'fahmiidris-dev' | 'patungan-dev' | 'naqimart-com' | 'random' | 'ui-ux-design';

export declare namespace Project {
  interface Preview {
    slug: string;
    module: Module;
  }

  interface Module {
    meta: MDXMetaType & {
      domain: string;
      banner?: ImageProps;
      repository?: string;
    };
    default: (props: any) => JSX.Element;
  }

  interface Latest {
    [key: string]: {
      projects: Project.Preview[];
      projectType: ProjectType;
    };
  }
}
