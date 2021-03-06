// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aGwaDyFceaTJ7MmVgLqAKM
// Component: quBP86QIw0hg
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import LoginComponent from "../../LoginComponent"; // plasmic-import: Abg9jpf0kADO/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_copy_of_supabase.module.css"; // plasmic-import: aGwaDyFceaTJ7MmVgLqAKM/projectcss
import sty from "./PlasmicSignupPage.module.css"; // plasmic-import: quBP86QIw0hg/css

export type PlasmicSignupPage__VariantMembers = {};

export type PlasmicSignupPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicSignupPage__VariantsArgs;
export const PlasmicSignupPage__VariantProps = new Array<VariantPropType>();

export type PlasmicSignupPage__ArgsType = {};
type ArgPropType = keyof PlasmicSignupPage__ArgsType;
export const PlasmicSignupPage__ArgProps = new Array<ArgPropType>();

export type PlasmicSignupPage__OverridesType = {
  root?: p.Flex<"div">;
  loginComponent?: p.Flex<typeof LoginComponent>;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  span?: p.Flex<"span">;
};

export interface DefaultSignupPageProps {}

function PlasmicSignupPage__RenderFunc(props: {
  variants: PlasmicSignupPage__VariantsArgs;
  args: PlasmicSignupPage__ArgsType;
  overrides: PlasmicSignupPage__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <LoginComponent
            data-plasmic-name={"loginComponent"}
            data-plasmic-override={overrides.loginComponent}
            className={classNames("__wab_instance", sty.loginComponent)}
            isSignUp={true}
            switchSignInOrSignUp2={
              <p.PlasmicLink
                data-plasmic-name={"link"}
                data-plasmic-override={overrides.link}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link
                )}
                component={Link}
                href={"/login-page" as const}
                platform={"nextjs"}
              >
                <React.Fragment>
                  <React.Fragment>{""}</React.Fragment>
                  <span
                    data-plasmic-name={"span"}
                    data-plasmic-override={overrides.span}
                    className={classNames(
                      projectcss.all,
                      projectcss.span,
                      projectcss.__wab_text,
                      projectcss.plasmic_default__inline,
                      sty.span
                    )}
                  >
                    {"Do you have an account? Sign in"}
                  </span>
                  <React.Fragment>{""}</React.Fragment>
                </React.Fragment>
              </p.PlasmicLink>
            }
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "loginComponent", "link", "span"],
  loginComponent: ["loginComponent", "link", "span"],
  link: ["link", "span"],
  span: ["span"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  loginComponent: typeof LoginComponent;
  link: "a";
  span: "span";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSignupPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSignupPage__VariantsArgs;
    args?: PlasmicSignupPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSignupPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSignupPage__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSignupPage__ArgProps,
      internalVariantPropNames: PlasmicSignupPage__VariantProps
    });

    return PlasmicSignupPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSignupPage";
  } else {
    func.displayName = `PlasmicSignupPage.${nodeName}`;
  }
  return func;
}

export const PlasmicSignupPage = Object.assign(
  // Top-level PlasmicSignupPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    loginComponent: makeNodeComponent("loginComponent"),
    link: makeNodeComponent("link"),
    span: makeNodeComponent("span"),

    // Metadata about props expected for PlasmicSignupPage
    internalVariantProps: PlasmicSignupPage__VariantProps,
    internalArgProps: PlasmicSignupPage__ArgProps
  }
);

export default PlasmicSignupPage;
/* prettier-ignore-end */
