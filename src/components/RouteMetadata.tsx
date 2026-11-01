import type { ReactNode } from "react";
import { Helmet } from "react-helmet-async";

export const routeMetadata = {
  "/": {
    title: "Mundayn | All-in-One Platform for Coaches & Creators",
    description: "One platform for coaches and creators: CRM, email/SMS, booking, payments, courses and community, with done-for-you setup. Plans from $59/month.",
  },
  "/done-for-you": {
    title: "Done-For-You Coaching Business Setup | Mundayn",
    description: "Launch your coaching business with Mundayn's done-for-you setup, from $599-$1,999, including CRM, booking, payments, email automations and training.",
  },
  "/foundation-setup": {
    title: "Foundation Setup for Coaches & Creators | Mundayn",
    description: "Get your Mundayn account ready in one week with Foundation Setup: branding, email, payments, calendar, automations and integrations configured for you.",
  },
  "/ecosystem": {
    title: "Business Growth Ecosystem for Coaches & Creators | Mundayn",
    description: "Explore the Mundayn ecosystem for coaches and creators, from Foundation Setup and frameworks to upcoming implementation services and dedicated support.",
  },
} as const;

type RouteMetadataProps = {
  path: keyof typeof routeMetadata;
  children: ReactNode;
};

export default function RouteMetadata({ path, children }: RouteMetadataProps) {
  const { title, description } = routeMetadata[path];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`https://mundayn.com${path}`} />
      </Helmet>
      {children}
    </>
  );
}