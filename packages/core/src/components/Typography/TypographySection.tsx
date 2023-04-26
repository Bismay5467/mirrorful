import {
  Box,
  Divider,
  Heading,
  Input,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { TPrimitivesTypography, TTokenGroup } from '@core/types'
import { useState } from 'react'

import { darkTheme, lightTheme } from '../theme'
import { FontSizesSection } from './FontSize/FontSizesSection'
import { FontWeightSection } from './FontWeight/FontWeightSection'
import { LineHeightSection } from './LineHeight/LineHeightSection'

export function TypographySection({
  typography,
  onUpdateTypography,
}: {
  typography: TPrimitivesTypography
  onUpdateTypography: (newTypography: TPrimitivesTypography) => void
}) {
  const [placeholderText, setPlaceholderText] = useState<string>('')
  const headingColor = useColorModeValue(
    lightTheme.headings.colors.large,
    darkTheme.headings.colors.large
  )
  return (
    <Box>
      <Heading
        fontSize={'2.5rem'}
        fontWeight="black"
        css={{
          background: headingColor,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Typography
      </Heading>
      <Text
        fontSize={'1.2rem'}
        fontWeight="medium"
        color="gray.600"
        css={{ marginTop: '12px' }}
      >
        {`Add and edit the fonts in your theme. `}
      </Text>

      <Divider
        css={{
          borderWidth: '2px',
          margin: '12px 0',
        }}
      />
      <Box css={{ marginBottom: '48px' }} />
      <Input
        placeholder="Type here to preview text"
        value={placeholderText}
        onChange={(e) => setPlaceholderText(e.target.value)}
        css={{ borderRadius: '25px', padding: '25px' }}
      />
      <Box css={{ marginBottom: '48px' }} />
      <FontSizesSection
        fontSizeData={typography.fontSizes}
        placeholder={placeholderText || 'Lorem ipsum dolor sit amet.'}
        onUpdateFontPropertyData={(newFontSizeData: TTokenGroup) => {
          onUpdateTypography({
            ...typography,
            fontSizes: newFontSizeData,
          })
        }}
      />
      <br />
      <br />
      <FontWeightSection
        fontWeightData={typography.fontWeights}
        placeholder={placeholderText || 'Lorem ipsum dolor sit amet.'}
        onUpdateFontPropertyData={(newFontWeightData: TTokenGroup) => {
          onUpdateTypography({
            ...typography,
            fontWeights: newFontWeightData,
          })
        }}
      />
      <br />
      <br />
      <LineHeightSection
        lineHeightData={typography.lineHeights}
        placeholder={placeholderText || 'Lorem ipsum dolor sit amet.'}
        onUpdateFontPropertyData={(newLineHeightData: TTokenGroup) => {
          onUpdateTypography({
            ...typography,
            lineHeights: newLineHeightData,
          })
        }}
      />
    </Box>
  )
}
