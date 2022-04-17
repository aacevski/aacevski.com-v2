import { PropsWithChildren } from 'react';
import { Container, VStack } from '@chakra-ui/react';

import Header from './header';

type Props = PropsWithChildren<{}>;

const Layout = ({ children }: Props) => {
  return (
    <VStack
      bgImage="radial-gradient(rgba(201, 201, 201, 0.7) 1.55px, rgba(229, 229, 247, 0.7) 1.55px)"
      bgSize="31px 31px"
    >
      <Header />
      <Container
        d="flex"
        maxW="container.md"
        minH={{ base: 'auto', md: '100vh' }}
        centerContent
      >
        <VStack alignItems="stretch" flex={1} w="full" spacing={16}>
          <VStack as="main" flex={1} w="full" spacing={16}>
            {children}
          </VStack>
        </VStack>
      </Container>
    </VStack>
  );
};

export default Layout;
