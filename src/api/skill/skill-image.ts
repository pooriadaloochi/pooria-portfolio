import * as adobeXd from "./icons/adobe-xd.svg";
import adobeaudition from "./icons/adobeaudition.svg";
import afterEffects from "./icons/after-effects.svg";
import angular from "./icons/angular.svg";
import aws from "./icons/aws.svg";
import azure from "./icons/azure.svg";
import blender from "./icons/blender.svg";
import bootstrap from "./icons/bootstrap.svg";
import bulma from "./icons/bulma.svg";
import c from "./icons/c.svg";
import canva from "./icons/canva.svg";
import capacitorjs from "./icons/capacitorjs.svg";
import coffeescript from "./icons/coffeescript.svg";
import cplusplus from "./icons/cplusplus.svg";
import csharp from "./icons/csharp.svg";
import css from "./icons/css.svg";
import dart from "./icons/dart.svg";
import deno from "./icons/deno.svg";
import django from "./icons/django.svg";
import docker from "./icons/docker.svg";
import fastify from "./icons/fastify.svg";
import figma from "./icons/figma.svg";
import firebase from "./icons/firebase.svg";
import flutter from "./icons/flutter.svg";
import gcp from "./icons/gcp.svg";
import gimp from "./icons/gimp.svg";
import git from "./icons/git.svg";
import go from "./icons/go.svg";
import graphql from "./icons/graphql.svg";
import haxe from "./icons/haxe.svg";
import html from "./icons/html.svg";
import illustrator from "./icons/illustrator.svg";
import ionic from "./icons/ionic.svg";
import java from "./icons/java.svg";
import javascript from "./icons/javascript.svg";
import julia from "./icons/julia.svg";
import kotlin from "./icons/kotlin.svg";
import lightroom from "./icons/lightroom.svg";
import markdown from "./icons/markdown.svg";
import materialui from "./icons/materialui.svg";
import matlab from "./icons/matlab.svg";
import memsql from "./icons/memsql.svg";
import microsoftoffice from "./icons/microsoftoffice.svg";
import mongoDB from "./icons/mongoDB.svg";
import mysql from "./icons/mysql.svg";
import nextJS from "./icons/nextJS.svg";
import nginx from "./icons/nginx.svg";
import numpy from "./icons/numpy.svg";
import nuxtJS from "./icons/nuxtJS.svg";
import opencv from "./icons/opencv.svg";
import photoshop from "./icons/photoshop.svg";
import php from "./icons/php.svg";
import picsart from "./icons/picsart.svg";
import postgresql from "./icons/postgresql.svg";
import premierepro from "./icons/premierepro.svg";
import python from "./icons/python.svg";
import pytorch from "./icons/pytorch.svg";
import react from "./icons/react.svg";
import ruby from "./icons/ruby.svg";
import selenium from "./icons/selenium.svg";
import sketch from "./icons/sketch.svg";
import strapi from "./icons/strapi.svg";
import svelte from "./icons/svelte.svg";
import swift from "./icons/swift.svg";
import tailwind from "./icons/tailwind.svg";
import tensorflow from "./icons/tensorflow.svg";
import typescript from "./icons/typescript.svg";
import unity from "./icons/unity.svg";
import vitejs from "./icons/vitejs.svg";
import vue from "./icons/vue.svg";
import vuetifyjs from "./icons/vuetifyjs.svg";
import webix from "./icons/webix.svg";
import wolframalpha from "./icons/wolframalpha.svg";
import wordpress from "./icons/wordpress.svg";

export const skillsImage = (skill: string): any => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "gcp":
      return gcp;
    case "html":
      return html;
    case "photoshop":
      return photoshop;
    case "docker":
      return docker;
    case "illustrator":
      return illustrator;
    case "adobe xd":
      return adobeXd;
    case "after effects":
      return afterEffects;
    case "css":
      return css;
    case "angular":
      return angular;
    case "javascript":
      return javascript;
    case "next js":
      return nextJS;
    case "nuxt js":
      return nuxtJS;
    case "react":
      return react;
    case "svelte":
      return svelte;
    case "typescript":
      return typescript;
    case "vue":
      return vue;
    case "bootstrap":
      return bootstrap;
    case "bulma":
      return bulma;
    case "capacitorjs":
      return capacitorjs;
    case "coffeescript":
      return coffeescript;
    case "memsql":
      return memsql;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;
    case "tailwind":
      return tailwind;
    case "vitejs":
      return vitejs;
    case "vuetifyjs":
      return vuetifyjs;
    case "c":
      return c;
    case "c++":
      return cplusplus;
    case "c#":
      return csharp;
    case "dart":
      return dart;
    case "go":
      return go;
    case "java":
      return java;
    case "kotlin":
      return kotlin;
    case "julia":
      return julia;
    case "matlab":
      return matlab;
    case "php":
      return php;
    case "python":
      return python;
    case "ruby":
      return ruby;
    case "swift":
      return swift;
    case "adobe audition":
      return adobeaudition;
    case "aws":
      return aws;
    case "deno":
      return deno;
    case "django":
      return django;
    case "firebase":
      return firebase;
    case "gimp":
      return gimp;
    case "git":
      return git;
    case "graphql":
      return graphql;
    case "lightroom":
      return lightroom;
    case "materialui":
      return materialui;
    case "nginx":
      return nginx;
    case "numpy":
      return numpy;
    case "opencv":
      return opencv;
    case "premiere pro":
      return premierepro;
    case "pytorch":
      return pytorch;
    case "selenium":
      return selenium;
    case "strapi":
      return strapi;
    case "tensorflow":
      return tensorflow;
    case "webix":
      return webix;
    case "wordpress":
      return wordpress;
    case "azure":
      return azure;
    case "blender":
      return blender;
    case "fastify":
      return fastify;
    case "figma":
      return figma;
    case "flutter":
      return flutter;
    case "haxe":
      return haxe;
    case "ionic":
      return ionic;
    case "markdown":
      return markdown;
    case "microsoft office":
      return microsoftoffice;
    case "picsart":
      return picsart;
    case "sketch":
      return sketch;
    case "unity":
      return unity;
    case "wolframalpha":
      return wolframalpha;
    case "canva":
      return canva;
    default:
      break;
  }
};
