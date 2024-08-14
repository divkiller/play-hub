import { Badge } from '@chakra-ui/react';

interface Props {
    score: number;
}

const CriticScore = ({ score }: Props) => {
    const color = score > 75 ? 'green' : score > 60 ? 'yellow' : score > 30 ? 'black' : 'red';

    return (
        <Badge
            colorScheme={color}
            fontSize="14px"
            paddingX="6px"
            borderRadius="4px"
        >
            {score}
        </Badge>
    );
};

export default CriticScore;
