import { Box, Container, Link, Typography, styled } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const FooterWrapper = styled(Container)(
  ({ theme }) => `
        margin-top: ${theme.spacing(4)};
`
);

export default function Footer() {
  return (
    <FooterWrapper className="footer-wrapper">
      <Box
        pb={4}
        display={{ xs: 'block', md: 'flex' }}
        alignItems="center"
        textAlign={{ xs: 'center', md: 'left' }}
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="subtitle1">
            &copy; 2024 - MUI Next Hasura e-Commerce
          </Typography>
        </Box>
        <Typography
          sx={{
            pt: { xs: 2, md: 0 }
          }}
          variant="subtitle1"
        >
          <GitHubIcon sx={{pb:'3px'}} fontSize="medium" />
          {' '}Crafted by{' '}
          <Link
            href="https://github.com/retiunsky"
            target="_blank"
            rel="noopener noreferrer"
          >
            Retiunsky
          </Link>
        </Typography>
      </Box>
    </FooterWrapper>
  );
}

