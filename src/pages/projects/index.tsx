import * as React from 'react';

import { Link } from '@/components/link';
import { Alert } from '@/components/alert';
import { Section } from '@/components/section';
import { ProjectCard, ProjectCardGroup } from '@/components/projects/project-card';

import { getProjectPreviews } from '@/services/project';

import type { NextPageWithLayout } from 'next';

const fahmiidrisDevProjectPreviews = getProjectPreviews.fahmiidrisDev();
const patunganDevProjectPreviews = getProjectPreviews.patunganDev();
const naqimartComProjectPreviews = getProjectPreviews.naqimartCom();
const randomProjectPreviews = getProjectPreviews.randomProjects();

const others = [
  'https://sc-b3k3n.netlify.app',
  'https://weekend-from-home.netlify.app',
  'https://bansosku.netlify.app',
  'https://geo-map-management.netlify.app',
];

const ExperiencesPage: NextPageWithLayout = () => {
  return (
    <article className="space-y-36 overflow-hidden py-8">
      <Section
        id="fahmiidris"
        title="www.fahmiidris.dev"
        subtitle="Portfolio and some resources I can create, I hope you like it!"
        description="I was inspired to create a personal development environment. It would be very cool and useful if I had it. You can also use some of the resources I have. It's open source!"
        maxWidthDescription="max-w-3xl"
      >
        {fahmiidrisDevProjectPreviews.length > 0 ? (
          <ProjectCardGroup>
            {fahmiidrisDevProjectPreviews.map((preview, index) => (
              <ProjectCard key={index} projectType="fahmiidris-dev" {...preview} />
            ))}
          </ProjectCardGroup>
        ) : (
          <Alert message="fahmiidris-dev projects hasn't been uploaded yet." />
        )}
      </Section>

      <Section
        id="design"
        title="UI/UX and DX Design Projects"
        subtitle="Trying to find the best UX and DX to solve problems with UI Design."
        description={() => (
          <p className="text-slate-400">
            This has always been a challenge for me, finding the best solution to solve the problem without forgetting the experience of{' '}
            <strong className="text-cyan-400">UX (User Experience)</strong> and <strong className="text-cyan-400">DX (Developer Experience)</strong>.
          </p>
        )}
        maxWidthDescription="max-w-3xl"
        className="bg-slate-800 py-16"
        colorText={{
          subtitle: 'text-white',
        }}
        // more={{
        //   href: 'https://design.fahmiidris.dev',
        //   text: 'Explore all design',
        //   className: 'bg-slate-700 text-white !border-transparent focus:ring-offset-slate-800',
        // }}
      >
        <Alert
          classNames={{ wrapper: 'border-cyan-400 bg-slate-700', text: 'text-white', icon: 'text-cyan-400' }}
          message="UI/UX Design projects hasn't been uploaded yet."
        />
      </Section>

      <Section
        id="patungan"
        title="www.patungan.dev"
        subtitle="A place to study together for those of you who don't like being alone!"
        description="In the past, I always wanted to build an online learning platform, which was inspired by several platforms in Indonesia. I think it will be useful for me and others."
        maxWidthDescription="max-w-3xl"
      >
        {patunganDevProjectPreviews.length > 0 ? (
          <ProjectCardGroup>
            {patunganDevProjectPreviews.map((preview, index) => (
              <ProjectCard key={index} projectType="patungan-dev" {...preview} />
            ))}
          </ProjectCardGroup>
        ) : (
          <Alert message="patungan-dev projects hasn't been uploaded yet." />
        )}
      </Section>

      <Section
        id="naqimart"
        title="www.naqimart.com"
        subtitle="Smart shop for you, easier shopping with naqimart."
        description="I've always wondered how e-Commerce came about, this is cool! people don't have to go home to buy something. I need to know how to make it!"
        maxWidthDescription="max-w-3xl"
      >
        {naqimartComProjectPreviews.length > 0 ? (
          <ProjectCardGroup>
            {naqimartComProjectPreviews.map((preview, index) => (
              <ProjectCard key={index} projectType="naqimart-com" {...preview} />
            ))}
          </ProjectCardGroup>
        ) : (
          <Alert message="naqimart-com projects hasn't been uploaded yet." />
        )}
      </Section>

      <Section
        id="random-projects"
        title="Random Projects"
        subtitle="Crazy things sometimes start with randomness."
        description="It's not amazing, but I really like it! I made it with great difficulty, wow. Usually this random category is all that I made but outside of the 4 domains above."
        maxWidthDescription="max-w-3xl"
      >
        {randomProjectPreviews.length > 0 ? (
          <ProjectCardGroup>
            {randomProjectPreviews.map((preview, index) => (
              <ProjectCard key={index} projectType="random" {...preview} />
            ))}
          </ProjectCardGroup>
        ) : (
          <Alert message="projects hasn't been uploaded yet." />
        )}

        <div className="pt-8">
          <h3 className="mb-2 font-semibold text-slate-800">Others</h3>

          <ul className="flex list-inside list-disc flex-col space-y-2">
            {others.map((other, index) => (
              <li key={index}>
                <Link href={other} className="inline-flex items-center hover:text-slate-800">
                  {other}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </article>
  );
};

ExperiencesPage.Props = {
  meta: {
    title: 'Projects',
    description: 'Portfolio and some resources I can create, I hope you like it!',
  },
};

export default ExperiencesPage;
