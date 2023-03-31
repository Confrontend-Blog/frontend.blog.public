import Link from "next/link";
import { useRouter } from "next/router";
import { INavigation } from "./navigation.types";
import * as S from "./navigation.styled";

type NavigationProps = {
  navMenuItems?: INavigation[];
  rightSideItems?: React.ReactNode;
};

/**
 * Navigation bar with lazy-loading capability.
 * On Mouse Enter or Focus, the components get lazy-loaded.
 * @returns Navigation JSX Element
 */
export const Navigation = ({ navMenuItems, rightSideItems }: NavigationProps) => {
  const router = useRouter();

  return (
    <S.NavigationWrapper>
      {navMenuItems &&
        navMenuItems.map((item, index) => (
          <Link href={item.route} key={item.displayName}>
            <a
              onMouseEnter={item.lazyLoadComponent}
              onFocus={item.lazyLoadComponent}
              style={
                router.pathname === item.route ||
                (router.pathname === "/" && index === 0)
                  ? {
                      borderBottom: " 3px solid #0384fc",
                      marginBottom: "-3px",
                    }
                  : { color: "#000000" }
              }
            >
              <span>{item.displayName}</span>
            </a>
          </Link>
        ))}
      {rightSideItems && (
        <S.ItemRightWrapper>{rightSideItems}</S.ItemRightWrapper>
      )}
    </S.NavigationWrapper>
  );
};

export default Navigation;