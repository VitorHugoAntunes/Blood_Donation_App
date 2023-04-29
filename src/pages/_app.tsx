import { FormDataProvider } from '@/contexts/FormData';
import { CurrentUserProvider } from '@/contexts/currentUser';
import { globalStyles } from '@/styles/global';
import type { AppProps } from 'next/app'


globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FormDataProvider>
      <CurrentUserProvider>
        <Component {...pageProps} />
      </CurrentUserProvider>
    </FormDataProvider>
  )
}
