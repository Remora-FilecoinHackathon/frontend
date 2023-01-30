import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';

function AccordianUi(props: any) {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionButton
          fontFamily={'Questrial'}
          background={'transparent'}
          color={'var(--collective-color-textSecondary)'}
          border={'0'}
          fontSize={'15px'}
          borderTop={'0.5px solid #323232'}
        >
          <Box
            as="span"
            flex="1"
            textAlign="left"
            margin={'20px'}
            marginLeft={'0px'}
          >
            What is $FIL?
          </Box>
          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel pb={4} marginBottom={'20px'}>
          Filecoin’s cryptocurrency, FIL, is the native token powering its
          network. That means FIL is used to pay for storage and retrieval, and
          for any other transactions on the network.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton
          fontFamily={'Questrial'}
          background={'transparent'}
          color={'var(--collective-color-textSecondary)'}
          border={'0'}
          borderTop={'0.5px solid #323232'}
          fontSize={'15px'}
        >
          <Box
            as="span"
            flex="1"
            textAlign="left"
            margin={'20px'}
            marginLeft={'0px'}
          >
            What is a lender?
          </Box>
          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel pb={4} marginBottom={'20px'}>
          A user who owns $FIL can become a lender and then make their $FIL
          available for loans. The lender's position can be filled by multiple
          borrowers. The lender can redeem the borrower rates to repay the loan
          once a month.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionButton
          fontFamily={'Questrial'}
          background={'transparent'}
          color={'var(--collective-color-textSecondary)'}
          border={'0'}
          fontSize={'15px'}
          borderTop={'0.5px solid #323232'}
        >
          <Box
            as="span"
            flex="1"
            textAlign="left"
            margin={'20px'}
            marginLeft={'0px'}
          >
            What is a borrower?
          </Box>
          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel pb={4} marginBottom={'20px'}>
          A borrower chooses the best loan for their need from among the
          available (as yet unfilled) loans based on their needs of becoming a
          Storage Provider. A borrower repays their debt from the rewards of
          storage providing on Filecoin.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default AccordianUi;
