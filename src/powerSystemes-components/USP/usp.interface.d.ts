import { ProductIcons } from '../../components/icon/Icons';
export type ProductIconNames = keyof typeof ProductIcons;
export interface USPProps {
    textColor?: 'white' | 'blue';
    iconName: ProductIconNames;
    count: number;
    headline: string;
    description: string;
}
//# sourceMappingURL=usp.interface.d.ts.map