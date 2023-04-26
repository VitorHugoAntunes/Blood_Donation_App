import { FormDataProvider } from '@/contexts/FormData';
import { globalStyles } from '@/styles/global';
import type { AppProps } from 'next/app'


globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FormDataProvider>
      <Component {...pageProps} />
    </FormDataProvider>
  )
}
