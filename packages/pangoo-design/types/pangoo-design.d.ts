import Vue from 'vue'
import { PDComponent } from './component'

import { PdHello } from './hello'

export interface InstallationOptions {
  locale: any,
  i18n: any,
  size: string
}

/** The version of PD */
export const version: string

/**
 * Install all pangoo-design components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(PD)` to install.
 */
export function install (vue: typeof Vue, options: InstallationOptions): void

/** PD component common definition */
export type Component = PDComponent

// TS cannot merge imported class with namespace, so declare subclasses instead

/** Hello Component */
export class Hello extends PdHello {}
