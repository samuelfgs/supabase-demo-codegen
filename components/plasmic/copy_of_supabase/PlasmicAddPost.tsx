// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aGwaDyFceaTJ7MmVgLqAKM
// Component: VWLTdNIQLBao
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
import { SupabaseMutation } from "../../CodeComponents/DatabaseComponents"; // plasmic-import: 4TsbaDRppPhb/codeComponent
import { FormContextComponent } from "../../CodeComponents/Form"; // plasmic-import: ZuzBoRqG7Nz/codeComponent
import { FormTextInput } from "../../CodeComponents/Form"; // plasmic-import: R9j1z7GOLHg/codeComponent
import TextInput from "../../TextInput"; // plasmic-import: Hrt-8c55kCA/component
import Button from "../../Button"; // plasmic-import: 72kuX7z4jE2/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_copy_of_supabase.module.css"; // plasmic-import: aGwaDyFceaTJ7MmVgLqAKM/projectcss
import sty from "./PlasmicAddPost.module.css"; // plasmic-import: VWLTdNIQLBao/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: ikNXI5MzGP8E/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: ZsbkirgRD0ll/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: -NPp1PMkI3Mu/icon

export type PlasmicAddPost__VariantMembers = {};

export type PlasmicAddPost__VariantsArgs = {};
type VariantPropType = keyof PlasmicAddPost__VariantsArgs;
export const PlasmicAddPost__VariantProps = new Array<VariantPropType>();

export type PlasmicAddPost__ArgsType = {
  test?: any;
  id?: string;
};

type ArgPropType = keyof PlasmicAddPost__ArgsType;
export const PlasmicAddPost__ArgProps = new Array<ArgPropType>("test", "id");

export type PlasmicAddPost__OverridesType = {
  root?: p.Flex<"div">;
  h3?: p.Flex<"h3">;
  supabaseMutation?: p.Flex<typeof SupabaseMutation>;
  formContext?: p.Flex<typeof FormContextComponent>;
  textarea?: p.Flex<"textarea">;
  button?: p.Flex<typeof Button>;
};

export interface DefaultAddPostProps {}

function PlasmicAddPost__RenderFunc(props: {
  variants: PlasmicAddPost__VariantsArgs;
  args: PlasmicAddPost__ArgsType;
  overrides: PlasmicAddPost__OverridesType;

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
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__zt42)}>
              {true ? (
                <div className={classNames(projectcss.all, sty.freeBox__lt20I)}>
                  {true ? (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__i4Gkg)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__iXgC
                        )}
                      >
                        <React.Fragment>
                          <React.Fragment>{""}</React.Fragment>
                          <h3
                            data-plasmic-name={"h3"}
                            data-plasmic-override={overrides.h3}
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3
                            )}
                          >
                            {"Post"}
                          </h3>
                          <React.Fragment>{""}</React.Fragment>
                        </React.Fragment>
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : null}

              <SupabaseMutation
                data-plasmic-name={"supabaseMutation"}
                data-plasmic-override={overrides.supabaseMutation}
                className={classNames("__wab_instance", sty.supabaseMutation)}
                data={{
                  title: "{{form.title}}",
                  content: "{{form.content}}",
                  imageUrl: "{{form.imageUrl}}"
                }}
                method={"insert" as const}
                redirectOnSuccess={"/" as const}
                tableName={"posts" as const}
              >
                <FormContextComponent
                  data-plasmic-name={"formContext"}
                  data-plasmic-override={overrides.formContext}
                  className={classNames("__wab_instance", sty.formContext)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__bcVVs)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___6IErz
                      )}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__auSia
                        )}
                      >
                        {"Title"}
                      </div>

                      <FormTextInput
                        className={classNames(
                          "__wab_instance",
                          sty.formTextInput__idzUu
                        )}
                        name={"title" as const}
                      >
                        <TextInput
                          className={classNames(
                            "__wab_instance",
                            sty.textInput__h9LE
                          )}
                        />
                      </FormTextInput>
                    </p.Stack>

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__d2GK)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___6Llo0
                        )}
                      >
                        {"ImageUrl"}
                      </div>

                      <FormTextInput
                        className={classNames(
                          "__wab_instance",
                          sty.formTextInput__icFcq
                        )}
                        name={"imageUrl" as const}
                      >
                        <TextInput
                          className={classNames(
                            "__wab_instance",
                            sty.textInput___0AFB
                          )}
                        />
                      </FormTextInput>
                    </p.Stack>

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__nn7V8)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__widud
                        )}
                      >
                        {"Content"}
                      </div>

                      <FormTextInput
                        className={classNames(
                          "__wab_instance",
                          sty.formTextInput___1YEP
                        )}
                        name={"content" as const}
                      >
                        <textarea
                          data-plasmic-name={"textarea"}
                          data-plasmic-override={overrides.textarea}
                          className={classNames(
                            projectcss.all,
                            projectcss.textarea,
                            sty.textarea
                          )}
                          placeholder={"Enter something..." as const}
                        />
                      </FormTextInput>
                    </p.Stack>

                    <Button
                      data-plasmic-name={"button"}
                      data-plasmic-override={overrides.button}
                      className={classNames("__wab_instance", sty.button)}
                    >
                      {"Add"}
                    </Button>
                  </p.Stack>
                </FormContextComponent>
              </SupabaseMutation>
            </div>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h3", "supabaseMutation", "formContext", "textarea", "button"],
  h3: ["h3"],
  supabaseMutation: ["supabaseMutation", "formContext", "textarea", "button"],
  formContext: ["formContext", "textarea", "button"],
  textarea: ["textarea"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  h3: "h3";
  supabaseMutation: typeof SupabaseMutation;
  formContext: typeof FormContextComponent;
  textarea: "textarea";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAddPost__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAddPost__VariantsArgs;
    args?: PlasmicAddPost__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAddPost__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAddPost__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicAddPost__ArgProps,
      internalVariantPropNames: PlasmicAddPost__VariantProps
    });

    return PlasmicAddPost__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAddPost";
  } else {
    func.displayName = `PlasmicAddPost.${nodeName}`;
  }
  return func;
}

export const PlasmicAddPost = Object.assign(
  // Top-level PlasmicAddPost renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h3: makeNodeComponent("h3"),
    supabaseMutation: makeNodeComponent("supabaseMutation"),
    formContext: makeNodeComponent("formContext"),
    textarea: makeNodeComponent("textarea"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicAddPost
    internalVariantProps: PlasmicAddPost__VariantProps,
    internalArgProps: PlasmicAddPost__ArgProps
  }
);

export default PlasmicAddPost;
/* prettier-ignore-end */
