type Props = {
    x: number;
    y: number;
};

export function Cell({ x, y }: Props) {
    return <td data-value={'X'} />;
}
