import { StyledSubTitulo } from "./style";

export type Props ={
    size: 'ParagraphPrincipal' | 'SubParagraph';
    color: 'Black' | 'GreyTitle'
    children: string;
}
const SubTititulo =({size = 'ParagraphPrincipal', color = 'Black', children}: Props) =>
<StyledSubTitulo size={size} color={color}>
    {children}
</StyledSubTitulo>

export default SubTititulo
