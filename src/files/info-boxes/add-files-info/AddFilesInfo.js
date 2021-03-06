import React from 'react'
import { withTranslation, Trans } from 'react-i18next'
import Box from '../../../components/box/Box'

const AddFilesInfo = () => (
  <div className='mv4 tc navy f5' >
    <Box style={{ background: 'rgba(105, 196, 205, 0.1)' }}>
      <Trans i18nKey='addFilesInfo'>
        <p className='ma0'>Add files to your local IPFS node by clicking the <strong>Add to IPFS</strong> button above.</p>
      </Trans>
    </Box>
  </div>
)

export default withTranslation('files')(AddFilesInfo)
