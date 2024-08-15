import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface Props {
    children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
    return (
        <Box width="436px" borderRadius={10} overflow="hidden">
            {children}
        </Box>
    );
};

export default GameCardContainer;
