import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTheme } from 'next-themes';

export default function GoBackBtn({ category }) {
  const { resolvedTheme } = useTheme();
  let color = resolvedTheme === 'light' ? '#6CF9F8' : '#F739C0';

  const options = {
    duration: 500,
    smooth: true,
  };
  const router = useRouter();
  const onClickHandler = () => {
    router.back();
  };
  return (
    <Button  variant="outlined"
    disableRipple
      sx={{mb: 3,
        color,
        fontSize: '18px',
        borderColor: "transparent",
        '&:hover': {
          border: '1px solid',
          background: 'transparent',
        },
      }}
      startIcon={<ArrowBackIcon />}
      onClick={onClickHandler}
    >
      Back to {category}
    </Button>
  );
}
