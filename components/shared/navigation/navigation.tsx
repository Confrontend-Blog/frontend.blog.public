import Link from "next/link";
import { useRouter } from "next/router";
import { INavigation } from "./navigation.types";
import * as S from "./navigation.styled";

type NavigationProps = {
  navMenuItems?: INavigation[];
  rightSideItems?: React.ReactNode;
};

/**
 * Navigation bar.
 * @returns Navigation JSX Element
 */
export const Navigation = ({
  navMenuItems,
  rightSideItems,
}: NavigationProps) => {
  return (
    <S.NavigationWrapper>
      {navMenuItems &&
        navMenuItems.map((item, index) => (
          <Link href={item.route} key={item.displayName}>
            <span>{item.displayName}</span>
          </Link>
        ))}
      {rightSideItems && (
        <S.ItemRightWrapper>{rightSideItems}</S.ItemRightWrapper>
      )}
    </S.NavigationWrapper>
  );
};

export default Navigation;
