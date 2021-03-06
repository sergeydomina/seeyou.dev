import styled from 'styled-components';

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.title.semiBold};
  font-size: 30px;
  line-height: 1.43;

  color: ${({ theme }) => theme.colors.primaryText};

  margin-bottom: 27px;
`;

export const ETitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  color: ${({ theme }) => theme.colors.black_btn};
  font-size: 40px;
  line-height: 1.25;

  margin-bottom: 27px;
`;

export const Discription = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 20px;
  line-height: 1.35;

  color: ${({ theme }) => theme.colors.black_btn};
  margin-bottom: 43px;
`;
export const DiscriptionRer = styled.span`
  color: red;
`;

export const CollectsDiscription = styled(Discription)`
  margin-bottom: 0px;
`;

export const DiscriptionList = styled.ul`
  list-style-type: disc;
  padding-left: 35px;
  margin-bottom: 27px;
`;

export const Subtitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.descr.bold};
  font-size: 20px;
  line-height: 1.35;

  color: ${({ theme }) => theme.colors.black_btn};
`;

export const EmailLink = styled.a`
  text-decoration: underline;

  color: ${({ theme }) => theme.colors.link};
`;
