import { css } from 'styled-components';

const LayoutGuide = css`
  .wrap {
    max-width: 1500px;
    margin: 0 auto;
  }

  .tc {
    text-align: center;
  }

  .flex {
    display: flex;

    &_col {
      flex-direction: column;
    }

    &_cc {
      justify-content: center;
      align-items: center;
    }

    &_cs {
      justify-content: center;
      align-items: flex-start;
    }

    &_ce {
      justify-content: center;
      align-items: flex-end;
    }

    &_bs {
      justify-content: space-between;
      align-items: flex-start;
    }

    &_bc {
      justify-content: space-between;
      align-items: center;
    }

    &_ac {
      justify-content: space-around;
      align-items: center;
    }

    &_sc {
      justify-content: flex-start;
      align-items: center;
    }

    &_ec {
      justify-content: flex-end;
      align-items: center;
    }
  }

  .grid {
    display: grid;
  }

  .shadow {
    &_small {
      box-shadow: 5px 5px 10px #eeeeee;
    }
  }
`;

export default LayoutGuide;
