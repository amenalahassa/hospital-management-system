import type { NextPage } from 'next'

export type RoutedComponent<P = {}, IP = P> = NextPage<P, IP> & {
    route?: string
}