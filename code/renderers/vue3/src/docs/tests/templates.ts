export const templates = [
  `<div>
    <Accordion
      v-bind="args"
      style="max-width: 300px"
    >
      <h2>Some text</h2>
      <p>Some more text</p>

      <template #contentInfo>
        <span v-html="args.contentInfoSlot" />
      </template>
    </Accordion>

    <Accordion
      v-bind="args"
      style="max-width: 300px"
    >
      <h2>Some text</h2>
      <p>Some more text</p>

      <template #contentInfo>
        <span v-html="args.contentInfoSlot" />
      </template>
    </Accordion>

    <Accordion
        v-bind="args"
        style="max-width: 300px"
    >
      <h2>Some text</h2>
      <p>Some more text</p>

      <template #contentInfo>
        <span v-html="args.contentInfoSlot" />
      </template>
    </Accordion>
  </div>
`,
  `<SbAvatar
    v-bind="args"
  />
`,
  `<div>
  <SbAvatar name="John Doe" size="large" bg-color="primary" />

  <SbAvatar name="John Doe" bg-color="primary-dark" />

  <SbAvatar name="John" size="small" bg-color="secondary" />
</div>`,
  `<div>
  <SbAvatar
    src="https://avatars0.githubusercontent.com/u/20342656?s=460&u=1f62c95c10543861ad74b58a3c03cd774e7a4fa4&v=4"
    size="large"
    bg-color="primary"
  />

  <SbAvatar
    src="https://avatars0.githubusercontent.com/u/20342656?s=460&u=1f62c95c10543861ad74b58a3c03cd774e7a4fa4&v=4"
    bg-color="primary-dark"
  />

  <SbAvatar
    src="https://avatars0.githubusercontent.com/u/20342656?s=460&u=1f62c95c10543861ad74b58a3c03cd774e7a4fa4&v=4"
    size="small"
    bg-color="secondary"
  />
</div>`,
  `<div>
  <div style="margin: 10px 0;">
    <SbAvatar
      src="https://avatars0.githubusercontent.com/u/20342656?s=460&u=1f62c95c10543861ad74b58a3c03cd774e7a4fa4&v=4"
      size="large"
      name="John Doe"
      show-name
    />
  </div>

  <div style="margin: 10px 0;">
    <SbAvatar
      src="https://avatars0.githubusercontent.com/u/20342656?s=460&u=1f62c95c10543861ad74b58a3c03cd774e7a4fa4&v=4"
      name="John Doe"
      show-name
    />
  </div>

  <div style="margin: 10px 0;">
    <SbAvatar
      src="https://avatars0.githubusercontent.com/u/20342656?s=460&u=1f62c95c10543861ad74b58a3c03cd774e7a4fa4&v=4"
      size="small"
      name="John Doe"
      show-name
    />
  </div>
</div>`,
  `<div>
  <div>
    <SbAvatar
      v-bind="args"
      descriptionPosition="top"
    />
  </div>

  <div style="margin-top: 20px">
    <SbAvatar
      v-bind="args"
      descriptionPosition="bottom"
      bg-color="primary-dark"
    />
  </div>
</div>`,
  `<div>
  <SbAvatar
    src="https://google.com"
    size="large"
    bg-color="primary"
  />

  <SbAvatar src="https://google.com" bg-color="secondary" />

  <SbAvatar
    src="https://google.com"
    size="small"
    bg-color="negative"
  />
</div>`,
  `<div>
  <SbAvatar name="John Doe" />
</div>`,
  `<div>
  <div style="margin: 10px 0">
    <SbAvatar size="large">
      <img src="https://avatars0.githubusercontent.com/u/20342656?s=460&u=1f62c95c10543861ad74b58a3c03cd774e7a4fa4&v=4" alt="Image of John Doe" />
    </SbAvatar>
  </div>

  <div style="margin: 10px 0">
    <SbAvatar size="large" name="John Doe" show-name>
      <img src="https://avatars0.githubusercontent.com/u/20342656?s=460&u=1f62c95c10543861ad74b58a3c03cd774e7a4fa4&v=4" alt="Image of John Doe" />
    </SbAvatar>
  </div>
</div>`,
  `<div>
  <SbAvatar name="Ada Lovelace" />

  <SbAvatar name="Ada Lovelace" />

  <SbAvatar name="Alan Turing" />

  <SbAvatar name="Alan Turing" />

  <SbAvatar name="Alan Turing" />

  <SbAvatar name="John von Neumann" />

  <SbAvatar name="John von Neumann" />

  <SbAvatar name="Tommy Flowers" />

  <SbAvatar name="Tommy Flowers" />

  <SbAvatar name="Tommy Flowers" />

  <SbAvatar name="John von Neumann" />

  <SbAvatar name="George Boole" />

  <SbAvatar name="George Boole" />

  <SbAvatar name="Ramon Llull" />

  <SbAvatar name="Ramon Llull" />

  <SbAvatar name="Ramon Llull" />

  <SbAvatar name="Joseph Marie Jacquard" />

  <SbAvatar name="Joseph Marie Jacquard" />

  <SbAvatar name="Banū Mūsā" />

  <SbAvatar name="Banū Mūsā" />
</div>`,
  `<div>
  <p class="font-size-lg"> With white Background </p>

  <SbAvatarGroup :size="size" :dark-bg="darkBg">
    <SbAvatar
      src="https://avatars0.githubusercontent.com/u/20342656?s=460&u=1f62c95c10543861ad74b58a3c03cd774e7a4fa4&v=4"
      name="John Doe"
    />

    <SbAvatar
      src="https://avatars0.githubusercontent.com/u/20342656?s=460&u=1f62c95c10543861ad74b58a3c03cd774e7a4fa4&v=4"
      name="Kobe Bryant"
    />

    <SbAvatar
      src="https://avatars0.githubusercontent.com/u/20342656?s=460&u=1f62c95c10543861ad74b58a3c03cd774e7a4fa4&v=4"
      name="Elvis Presley"
    />
  </SbAvatarGroup>

  <p class="font-size-lg"> With dark Background </p>

  <div style="padding: 20px; background-color: #1B243F;">
    <SbAvatarGroup :size="size" dark-bg>
      <SbAvatar
        src="https://avatars0.githubusercontent.com/u/20342656?s=460&u=1f62c95c10543861ad74b58a3c03cd774e7a4fa4&v=4"
        name="John Doe"
      />

      <SbAvatar
        src="https://avatars0.githubusercontent.com/u/20342656?s=460&u=1f62c95c10543861ad74b58a3c03cd774e7a4fa4&v=4"
        name="Kobe Bryant"
      />

      <SbAvatar
        src="https://avatars0.githubusercontent.com/u/20342656?s=460&u=1f62c95c10543861ad74b58a3c03cd774e7a4fa4&v=4"
        name="Elvis Presley"
      />
    </SbAvatarGroup>
  </div>
</div>
`,
  `<div>
  <SbAvatarGroup size="large">
    <SbAvatar
      src="https://avatars0.githubusercontent.com/u/20342656?s=460&u=1f62c95c10543861ad74b58a3c03cd774e7a4fa4&v=4"
    />

    <SbAvatar
      src="https://avatars0.githubusercontent.com/u/20342656?s=460&u=1f62c95c10543861ad74b58a3c03cd774e7a4fa4&v=4"
    />

    <SbAvatar
      src="https://avatars0.githubusercontent.com/u/20342656?s=460&u=1f62c95c10543861ad74b58a3c03cd774e7a4fa4&v=4"
    />
  </SbAvatarGroup>

  <SbAvatarGroup>
    <SbAvatar
      src="https://avatars0.githubusercontent.com/u/20342656?s=460&u=1f62c95c10543861ad74b58a3c03cd774e7a4fa4&v=4"
    />

    <SbAvatar
      src="https://avatars0.githubusercontent.com/u/20342656?s=460&u=1f62c95c10543861ad74b58a3c03cd774e7a4fa4&v=4"
    />

    <SbAvatar
      src="https://avatars0.githubusercontent.com/u/20342656?s=460&u=1f62c95c10543861ad74b58a3c03cd774e7a4fa4&v=4"
    />
  </SbAvatarGroup>

  <SbAvatarGroup size="small">
    <SbAvatar
      src="https://avatars0.githubusercontent.com/u/20342656?s=460&u=1f62c95c10543861ad74b58a3c03cd774e7a4fa4&v=4"
    />

    <SbAvatar
      src="https://avatars0.githubusercontent.com/u/20342656?s=460&u=1f62c95c10543861ad74b58a3c03cd774e7a4fa4&v=4"
    />

    <SbAvatar
      src="https://avatars0.githubusercontent.com/u/20342656?s=460&u=1f62c95c10543861ad74b58a3c03cd774e7a4fa4&v=4"
    />
  </SbAvatarGroup>
</div>
`,
  `<div>
  <div>
    <SbAvatarGroup v-bind="args">
      <SbAvatar
        src="https://avatars0.githubusercontent.com/u/20342656?s=460&u=1f62c95c10543861ad74b58a3c03cd774e7a4fa4&v=4"
      />

      <SbAvatar name="John Doe" bg-color="primary" />

      <SbAvatar
        src="https://avatars0.githubusercontent.com/u/20342656?s=460&u=1f62c95c10543861ad74b58a3c03cd774e7a4fa4&v=4"
      />

      <SbAvatar
        src="https://avatars0.githubusercontent.com/u/20342656?s=460&u=1f62c95c10543861ad74b58a3c03cd774e7a4fa4&v=4"
      />

      <SbAvatar
        src="https://avatars0.githubusercontent.com/u/20342656?s=460&u=1f62c95c10543861ad74b58a3c03cd774e7a4fa4&v=4"
      />

      <SbAvatar name="John Doe" bg-color="primary-dark" />

      <SbAvatar
        src="https://avatars1.githubusercontent.com/u/7952803?s=400&u=0fd8a3a0721768210fdcedb7607e9ad33af9f7ad&v=4"
        name="Dominik Angerer"
      />

      <SbAvatar
        src="https://avatars1.githubusercontent.com/u/160495?s=460&u=b88ece40883d2e9716e833f6a3c78c56ca3eb14f&v=4"
        name="Alexander Feiglstorfer"
      />
    </SbAvatarGroup>
  </div>
</div>
`,
  `<SbBadge
    v-bind="args"
  />
`,
  `<div>
  <SbBadge
    v-bind="args"
    type="positive"
  />
  <SbBadge
    v-bind="args"
    type="info"
  />
  <SbBadge
    v-bind="args"
    type="warning"
  />
  <SbBadge
    v-bind="args"
    type="negative"
  />
</div>`,
  `<div>
  <SbBadge type="positive">A slot text</SbBadge>
</div>`,
  `<div>
    <SbButton
      :variant="args.variant"
      :label="args.label"
      :size="args.size"
      :type="args.type"
    />

    <SbButton
      :variant="args.variant"
      :is-disabled="args.isDisabled"
      :icon="args.icon"
      :icon-color="args.iconColor"
      :icon-filled="args.iconFilled"
      :label="args.label"
      :size="args.size"
      :type="args.type"
    />

    <SbButton
      :variant="args.variant"
      :is-disabled="args.isDisabled"
      :icon-right="args.iconRight"
      :icon-color="args.iconColor"
      :label="args.label"
      :size="args.size"
      :type="args.type"
    />

    <SbButton
      :variant="args.variant"
      :label="args.label"
      :is-loading="args.isLoading"
      :icon-filled="args.iconFilled"
      isDisabled
      :size="args.size"
      :type="args.type"
    />

    <SbButton
      :variant="args.variant"
      is-loading
      :icon-color="args.iconColor"
      :icon-filled="args.iconFilled"
      :is-disabled="args.isDisabled"
      :size="args.size"
      :type="args.type"
    />
  </div>
`,
  `<SbButton
    v-bind="args"
  />
`,
  `<div>
  <SbButton label="Small" size="small" :variant="variant" :icon="icon" />
  <SbButton label="Default" :variant="variant" :icon="icon" />
  <SbButton label="Large" size="large" :variant="variant" :icon="icon" />
</div>`,
  `<div style="max-width: 500px;">
  <SbButton
    is-full-width
    label="Full width"
  />
</div>`,
  `<div style="max-width: 500px;">
  <SbButton
    variant="primary"
    :size="args.size"
    :icon="args.icon"
    :icon-color="args.iconColor"
    :is-loading="args.isLoading"
    :is-disabled="args.isDisabled"
    :icon-filled="args.iconFilled"
    :type="args.type"
    has-icon-only
  />

  <SbButton
    variant="secondary"
    :size="args.size"
    :icon="args.icon"
    :icon-color="args.iconColor"
    :is-loading="args.isLoading"
    :is-disabled="args.isDisabled"
    :icon-filled="args.iconFilled"
    :type="type"
    has-icon-only
  />

  <SbButton
    variant="tertiary"
    :size="args.size"
    :icon="args.icon"
    :icon-color="args.iconColor"
    :icon-filled="args.iconFilled"
    :is-loading="args.isLoading"
    :is-disabled="args.isDisabled"
    :icon-description="args.iconDescription"
    is-rounded
    :type="args.type"
    has-icon-only
    :tooltip-position="args.tooltipPosition"
  />
</div>`,
  `<div style="max-width: 500px;">
  <SbButton
    :variant="args.variant"
    :is-loading="args.isLoading"
    :is-disabled="args.isDisabled"
    :size="args.size"
    :is-full-width="args.isFullWidth"
    :type="args.type"
  >
    {{ args.label }}
  </SbButton>
</div>`,
  `<SbButton v-bind="args" />
  `,
  `<div style="max-width: 400px">
    <SbBreadcrumbs v-bind="args">
      <template v-for="(item, index) in items">
        <SbBreadcrumbItem
          :key="item.label"
          :is-active="index === lastIndex"
          :label="item.label"
        />

        <SbBreadcrumbSeparator
          v-if="index < lastIndex"
          :key="index"
        />
      </template>
    </SbBreadcrumbs>
  </div>
`,
  `<div style="max-width: 400px">
    <SbBreadcrumbs v-bind="args" />
  </div>
`,
  `<SbCard :isLoading="isLoading">
    <SbCardHeader v-bind="args" />

    <SbCardContent>
      <div
        style="
          background-color: #f5f5f5;
          width: 100%;
          height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis, dui accumsan feugiat scelerisque, odio felis auctor lorem, nec dignissim nisi felis a lectus</p>
      </div>
    </SbCardContent>

    <SbCardFooter>
      <SbLink
        href="https://storyblok.com"
        label="Storyblok Website"
        icon-right="chevron-right"
      />
    </SbCardFooter>
</SbCard >
`,
  `<SbCard :isLoading="isLoading">
    <SbCardContent>
      <div
        style="
          background-color: #f5f5f5;
          width: 100%;
          height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis, dui accumsan feugiat scelerisque, odio felis auctor lorem, nec dignissim nisi felis a lectus</p>
      </div>
    </SbCardContent>
  </SbCard >
`,
  `<SbCard :isLoading="isLoading">
    <SbCardHeader v-bind="args" />

    <SbCardContent>
      <div
        style="
          background-color: #f5f5f5;
          width: 100%;
          height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis, dui accumsan feugiat scelerisque, odio felis auctor lorem, nec dignissim nisi felis a lectus</p>
      </div>
    </SbCardContent>

    <SbCardFooter>
      <SbLink
        href="https://storyblok.com"
        label="Storyblok Website"
        icon-right="chevron-right"
      />
    </SbCardFooter>
</SbCard >
`,
  `<SbCard :isLoading="isLoading">
    <SbCardHeader v-bind="args" :options="options" />

    <SbCardContent>
      <div
        style="
          background-color: #f5f5f5;
          width: 100%;
          height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis, dui accumsan feugiat scelerisque, odio felis auctor lorem, nec dignissim nisi felis a lectus</p>
      </div>
    </SbCardContent>

    <SbCardFooter>
      <SbLink
        href="https://storyblok.com"
        label="Storyblok Website"
        icon-right="chevron-right"
      />
    </SbCardFooter>
</SbCard >
`,
  `<div>
    <SbCheckbox
      :name="name"
      id="inactive"
      label="Inactive"
      :modelValue="modelValue"
      :disabled="disabled"
      :required="required"
      inline
      style="margin-right: 10px;"
    />

    <SbCheckbox
      :name="name"
      id="inactive-disabled"
      label="Inactive - Disabled"
      :modelValue="modelValue"
      :required="required"
      disabled
      inline
    />
  </div>
`,
  `<div>
    <div style="margin-bottom: 20px">
      <SbCheckbox
        id="selected"
        label="Selected"
        :name="name"
        :modelValue="true"
        native-value="Selected"
        inline
        style="margin-right: 10px;"
      />

      <SbCheckbox
        id="selected-disabled"
        label="Selected - Disabled"
        :name="name"
        :modelValue="true"
        native-value="Selected - Disabled"
        disabled
        inline
      />
    </div>
    <div>
      <SbCheckbox
        id="indeterminate"
        label="Indeterminate"
        :name="name"
        native-value="Indeterminate"
        indeterminate
        inline
        style="margin-right: 10px;"
      />

      <SbCheckbox
        id="indeterminate-disabled"
        label="Indeterminate - Disabled"
        :name="name"
        native-value="Indeterminate - Disabled"
        indeterminate
        disabled
        inline
      />
    </div>
  </div>
`,
  `<div>
    <div style="margin-bottom: 20px;">
      <SbCheckbox
        :name="name"
        id="inline"
        label="Inactive"
        native-value="Inactive"
        inline
        style="margin-right: 10px;"
      />

      <SbCheckbox
        :name="name"
        id="inline-selected"
        label="Selected"
        native-value="Selected"
        :modelValue="true"
        inline
        style="margin-right: 10px;"
      />

      <SbCheckbox
        :name="name"
        id="inline-disabled"
        native-value="Disabled"
        label="Disabled"
        inline
        disabled
        style="margin-right: 10px;"
      />
    </div>
  </div>
`,
  `<div>
    <div>
      <SbCheckbox
        name="radio-outline"
        id="outline"
        label="Inactive"
        native-value="Inactive"
        inline
        outline
        style="margin-right: 10px;"
      />

      <SbCheckbox
        name="radio-outline"
        id="outline-selected"
        label="Selected"
        native-value="Selected"
        :modelValue="true"
        inline
        outline
        style="margin-right: 10px;"
      />

      <SbCheckbox
        name="radio-outline"
        id="outline-disabled"
        native-value="Disabled"
        label="Disabled"
        inline
        outline
        disabled
        style="margin-right: 10px;"
      />
    </div>
  </div>
`,
  `<SbDataTable
    v-bind="args"
  />
`,
  `<div>
    <SbDataTable
      v-bind="args"
    >
      <SbDataTableColumn label="Spaces" :sortable="true" value="title" v-slot="props" width="50%">
        <span class="sb-data-table__col-main">{{ props.row.title }}</span><br>
        Edited {{ props.row.editedOn }}
      </SbDataTableColumn>

      <SbDataTableColumn label="Authors" v-slot="props">
        <SbAvatarGroup v-for="(author, index) in props.row.authors" :key="index">
          <SbAvatar v-bind="author" />
        </SbAvatarGroup>
      </SbDataTableColumn>

      <SbDataTableColumn label="Static">
        Static content testing
      </SbDataTableColumn>
    </SbDataTable>
  </div>
`,
  `<div>
    <SbDataTable
      v-bind="args"
    >
      <SbDataTableColumn label="Spaces" :sortable="true" value="title" width="50%">
        <template #header>
          <SbIcon name="content-story" /> With icon
        </template>

        <template #default="props">
          <span class="sb-data-table__col-main">{{ props.row.title }}</span><br>
          Edited {{ props.row.editedOn }}
        </template>
      </SbDataTableColumn>

      <SbDataTableColumn label="Authors">
        <template #header>
          Custom component
          <SbSelect :options="[{ label: 'Option 1', value: 'option1' }, { label: 'Option 2', value: 'option2' }]" label="Select an option" />
        </template>
        <template #default="props">
          <SbAvatarGroup v-for="(author, index) in props.row.authors" :key="index">
            <SbAvatar v-bind="author" />
          </SbAvatarGroup>
        </template>
      </SbDataTableColumn>

      <SbDataTableColumn label="Static">
        <template #header>
          <b>Custom text header</b>
        </template>
        <template #default>
          Static content testing
        </template>
      </SbDataTableColumn>
    </SbDataTable>
  </div>
`,
  `<div class="large">
    <SbDatepicker
      v-model="internalDatetimeValue"
      v-bind="args"
      style="width: 29.4rem"
    />
  </div>
`,
  `<SbDropArea
    :accept="accept"
    :subtitle="subtitle"
    :title="title"
    :max-file="maxFile"
    :max-file-size="maxFileSize"
  />
`,
  `<div>
    <SbDropArea
      :accept="accept"
      :max-file="maxFile"
      :max-file-size="maxFileSize"
      :subtitle="subtitle"
      :title="title"
    />

    <SbUploadDialog
      :total-files="5"
      :current-file="1"
      current-file-name="test.png"
      :percentage-value="45"
      :time-left="125"
      v-if="hasFiles"
    />
  </div>`,
  `<SbDropArea
    :accept="accept"
    subtitle="You can drop in multiple JPEGs, PNGs, SVGs, PDFs and all other files or choose"
    dropAreaButton="from your computer"
    :title="title"
    :max-file="maxFile"
    :max-file-size="maxFileSize"
  />
`,
  `<SbEditorHeader v-bind="args"  />
    `,
  `<SbEditorHeader>
      <template #left>
        <p>Custom left slot</p>
      </template>

      <template #middle>
        <p>Custom center slot</p>
      </template>

      <template #right>
      <p>Custom right slot</p>
      </template>
    </SbEditorHeader>
`,
  `<SbEditorHeader
    header-title="My title"
    mode="dark"
  />
`,
  `<div>
    <SbFormGroup
      v-bind="args"
      style="margin-bottom: 20px; max-width: 300px"
    >
      <SbTextField
        :placeholder="placeholder"
        style="margin-bottom: 15px;"
      />
      <SbTextField
        :placeholder="placeholder"
        style="margin-bottom: 15px;"
      />
    </SbFormGroup>

    <SbFormGroup
      v-bind="args"
      style="margin-bottom: 20px; max-width: 300px"
    >
      <SbTextField
        :label="label"
        style="margin-bottom: 15px;"
      />
      <SbTextField
        :label="label"
        style="margin-bottom: 15px;"
      />
    </SbFormGroup>

    <SbFormGroup
      v-bind="args"
      style="margin-bottom: 20px; max-width: 300px"
    >
      <SbSelect
        label="Choose an option"
        :options="options"
        style="display: block; margin-bottom: 15px; width: 100%; box-sizing: border-box"
      />

      <SbSelect
        label="Choose an option"
        :options="options"
        style="display: block; margin-bottom: 15px; width: 100%; box-sizing: border-box"
      />
    </SbFormGroup>
  </div>
`,
  `<div>
    <SbFormGroup
      v-bind="args"
      style="margin-bottom: 20px;"
    >
      <SbTextField
        :placeholder="placeholder"
        style="margin-bottom: 15px; max-width: 300px"
      />
      <SbTextField
        :placeholder="placeholder"
        style="margin-bottom: 15px; max-width: 300px"
      />
    </SbFormGroup>

    <SbFormGroup
      v-bind="args"
      style="margin-bottom: 20px;"
    >
      <SbTextField
        :label="label"
        style="margin-bottom: 15px; max-width: 300px"
      />
      <SbTextField
        :label="label"
        style="margin-bottom: 15px; max-width: 300px"
      />
    </SbFormGroup>
  </div>
`,
  `<div>
    <SbFormItem
      v-bind="args"
    >
      <SbTextField
        :placeholder="placeholder"
      />
    </SbFormItem>

    <SbFormItem :label="args.label" :is-required="args.isRequired">
      <SbRadio
        name="example"
        id="inactive"
        label="Inactive"
        v-model="internalValue"
        native-value="Inactive"
        inline
        style="margin-right: 20px;"
      />

      <SbRadio
        name="example"
        id="selected"
        label="Selected"
        v-model="internalValue"
        native-value="Selected"
        inline
      />
    </SbFormItem>

    <SbFormItem :label="args.label" :is-required="args.isRequired" grouped>
      <SbTextField
        name="example"
        id="textfield"
        style="flex: 1"
      />

      <SbButton label="Just a button" />
    </SbFormItem>
  </div>
`,
  `<div>
    <SbFormItem v-bind="args">
      <SbTextField
        name="example"
        id="textfield"
      />
    </SbFormItem>
  </div>
`,
  `<SbGroupButton v-bind="args">
    <SbButton label="First Button" />
    <SbButton label="Secondary Button" />
    <SbButton label="Third Button" />
  </SbGroupButton>
`,
  `<SbGroupButton v-bind="args">
    <SbButton label="First Button" />
    <SbButton label="Secondary Button" />
    <SbButton has-icon-only icon="x" />
  </SbGroupButton>
`,
  `<SbGroupButton v-bind="args">
    <SbButton has-icon-only icon="calendar" iconDescription="Calendar Icon" />
    <SbButton has-icon-only icon="plus" iconDescription="Plus Icon" />
    <SbButton has-icon-only icon="more-vertical" iconDescription="Overflow Icon" />
  </SbGroupButton>
`,
  `<div style="background-color:#1b243f;height:100px;">
    <SbGroupButton variant="inverted-link">
        <SbButton label="First button" />
        <SbButton label="Second button" />
    </SbGroupButton>
  </div>
`,
  `<SbHeader
    v-bind="args"
  />
`,
  `<SbHeading v-bind="args"> Storyblok is amazing! </SbHeading>
`,
  `<div>
    <div style="margin-bottom: 10px">
      <SbIcon name="chevron-down" size="small" />
    </div>
    <div style="margin-bottom: 10px">
      <SbIcon name="chevron-down" />
    </div>
    <div style="margin-bottom: 10px">
      <SbIcon name="chevron-down" size="large" />
    </div>
    <div style="margin-bottom: 10px">
      <SbIcon name="chevron-down" size="x-large" />
    </div>
  </div>
`,
  `<div>
  <p style="font-size: 20px; padding-left: 20px; margin: 0;"> All icons </p>
  <div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
    <div
      v-for="(name, index) in icons"
      :key="index"
      style="text-align: center; padding: 2rem"
    >
      <SbIcon v-bind="args" :name="name" />

      <p class="font-size-md"> {{ name }} </p>
    </div>
  </div>
</div>
`,
  `<SbIconButton v-bind="args" />
`,
  `<div style="background-color:#1b243f;padding:20px;">
    <SbIconButton icon-color="white" icon-name="toy-brick" />
  </div>
`,
  `<SbLink
    v-bind="args"
  />
`,
  `<SbLink>
    {{ label }}
  </SbLink>
`,
  `<SbLink
        icon="check"
        primary-label="With icon left"
      />
  `,
  `<SbLink
        icon-right="check"
        secondary-label="With icon left"
      />
  `,
  `<SbLoading
    v-bind="args"
  />
`,
  `<SbLoading
      v-bind="args"
    />
`,
  `<div>
    <SbLoading
      v-bind="args"
      type="spinner"
      size="small"
    />
    <SbLoading
      v-bind="args"
      type="spinner"
      size="normal"
    />
    <SbLoading
      v-bind="args"
      type="spinner"
      size="large"
    />
    <SbLoading
      v-bind="args"
      type="spinner"
      size="x-large"
    />
  </div>
`,
  `<div>
    <div style="margin-bottom: 15px">
      <SbLoading
        v-bind="args"
        type='spinner'
        size='small'
        modelValue="25"
        showPercentage="true"
      />
    </div>
    <div style="margin-bottom: 15px">
      <SbLoading
        v-bind="args"
        type='spinner'
        size='normal'
        modelValue="25"
        showPercentage="true"
      />
    </div>
    <div style="margin-bottom: 15px">
      <SbLoading
        v-bind="args"
        type='spinner'
        size='large'
        modelValue="25"
        showPercentage="true"
      />
    </div>
    <div style="margin-bottom: 15px">
      <SbLoading
        v-bind="args"
        type='spinner'
        size='x-large'
        modelValue="25"
        showPercentage="true"
      />
    </div>
  </div>
`,
  `<SbLoading v-bind="args">
    <SbLoadingPlaceholder v-bind="args" style="margin-bottom: 10px"/>
    <SbLoadingPlaceholder v-bind="args" style="margin-bottom: 10px"/>
  </SbLoading>
`,
  `<SbLoading
    :style="styleForDocs"
    v-bind="args"
  />
`,
  `<SbLogo v-bind="args" />
`,
  `<div style="background-color:#1b243f;padding:20px;">
    <SbLogo text-variant="white" />
  </div>
`,
  `<SbLogo icon-only />
`,
  `<div style="min-height: 300px;">
    <SbMenu :modelValue="modelValue">
      <SbMenuButton label="Combo button" :icon-right="iconRight" :icon="icon"/>

      <SbMenuList placement="bottom-start">
        <SbMenuGroup title="Actions">
          <SbMenuItem> Option 1 </SbMenuItem>
          <SbMenuItem> Option 2 </SbMenuItem>
        </SbMenuGroup>

        <SbMenuGroup title="More">
          <SbMenuItem> Option 3 </SbMenuItem>

          <SbMenuItem type="negative"> Delete </SbMenuItem>
        </SbMenuGroup>
      </SbMenuList>
    </SbMenu>
  </div>
`,
  `<div style="min-height: 300px;">
    <SbMenu :modelValue="modelValue">
      <SbMenuButton label="Combo button" :icon-right="iconRight" :icon="icon"/>

      <SbMenuList placement="bottom-start">
        <SbMenuItem> Option 1 </SbMenuItem>
        <SbMenuItem> Option 2 </SbMenuItem>

        <SbMenuSeparator />

        <SbMenuItem> Option 1 </SbMenuItem>
        <SbMenuItem> Option 2 </SbMenuItem>

        <SbMenuSeparator />

        <SbMenuItem type="negative"> Delete </SbMenuItem>
      </SbMenuList>
    </SbMenu>
  </div>
`,
  `<div style="min-height: 300px;">
    <SbMenu :modelValue="modelValue">
      <SbMenuButton label="Combo button" :icon-right="iconRight" :icon="icon"/>

      <SbMenuList placement="bottom-start">
        <SbMenuItem icon="calendar"> Option 1 </SbMenuItem>
        <SbMenuItem icon="plus"> Option 2 </SbMenuItem>

        <SbMenuSeparator />

        <SbMenuItem icon="search"> Option 1 </SbMenuItem>
        <SbMenuItem icon="folder"> Option 2 </SbMenuItem>
      </SbMenuList>
    </SbMenu>
  </div>
`,
  `<div style="min-height: 300px;">
    <SbMenu :modelValue="modelValue">
      <SbMenuButton has-icon-only is-rounded :icon-right="iconRight" :icon="icon"/>

      <SbMenuList placement="bottom-start">
        <SbMenuItem icon="calendar"> Option 1 </SbMenuItem>
        <SbMenuItem icon="plus"> Option 2 </SbMenuItem>

        <SbMenuSeparator />

        <SbMenuItem icon="search"> Option 1 </SbMenuItem>
        <SbMenuItem icon="folder"> Option 2 </SbMenuItem>
      </SbMenuList>
    </SbMenu>
  </div>
`,
  `<div style="display: flex; justify-content: center; min-height: 300px;">
    <SbMenu :modelValue="modelValue">
      <SbGroupButton variant="tertiary">
        <SbButton label="Define Schema" />
        <SbMenuButton has-icon-only />
      </SbGroupButton>

      <SbMenuList placement="bottom-end">
        <SbMenuItem> Option 1 </SbMenuItem>
        <SbMenuItem> Option 2 </SbMenuItem>

        <SbMenuSeparator />

        <SbMenuItem> Option 1 </SbMenuItem>
        <SbMenuItem> Option 2 </SbMenuItem>
      </SbMenuList>
    </SbMenu>
  </div>
`,
  `<div style="min-height: 300px;">
    <SbMenu :modelValue="modelValue">
      <SbMenuButton label="Combo button" :icon-right="iconRight" :icon="icon"/>

      <SbMenuList placement="bottom-start">
        <SbMenuGroup title="Links">
          <SbMenuItem as="a" to="https://storyblok.com"> Link 1: Storyblok </SbMenuItem>

          <SbMenuItem as="a" to="https://google.com"> Link 2: Google </SbMenuItem>
        </SbMenuGroup>

        <SbMenuGroup title="Buttons">
          <SbMenuItem> Button 1 </SbMenuItem>

          <SbMenuItem> Button 2 </SbMenuItem>
        </SbMenuGroup>
      </SbMenuList>
    </SbMenu>
  </div>
`,
  `<div style="min-height: 300px;">
<SbMenu :modelValue="modelValue">
  <SbMenuButton label="Combo button" ref="contentButton" :icon-right="iconRight" :icon="icon" />

  <SbMenuList placement="bottom-start" :reference="$refs.contentButton">
    <SbMenuItem> Option 1 </SbMenuItem>
    <SbMenuItem> Option 2 </SbMenuItem>
  </SbMenuList>
</SbMenu>
</div>
`,
  `<div style="min-height: 300px;">
<SbMenu :modelValue="modelValue">
<SbMenuButton
  ref="contentButton"
  :icon="icon"
  label="Combo"
  size="small"
  :icon-right="iconRight"
/>

  <SbMenuList placement="bottom-start" :reference="$refs.contentButton">
    <SbMenuItem> Option 1 </SbMenuItem>
    <SbMenuItem> Option 2 </SbMenuItem>
  </SbMenuList>
</SbMenu>
</div>
`,
  `<SbMinibrowser
    v-bind="args"
    @filter="handleFilter"
    @clear-navigation="handleClearNavigation"
    @navigate="handleNavigate"
    @select-item="handleSelectItem"
  />
`,
  `<SbMinibrowser
    :is-loading="internalLoading"
    :breadcrumbs="internalBreadcrumbs"
    :options="internalOptions"
    :is-list="isList"
    :is-expanded="isExpanded"
    :is-full-height="isFullHeight"
    :is-borderless="isBorderless"
    :filter-debounce="filterDebounce"
    :not-found-prefix="notFoundPrefix"
    :placeholder="placeholder"
    :clear-on-select="clearOnSelect"
    @filter="handleFilter"
    @clear-navigation="handleClearNavigation"
    @navigate="handleNavigate"
    @select-item="handleSelectItem"
  >
    <template v-slot:list="slotProps">
      <SbMinibrowserList v-bind="slotProps">
        <template v-if="slotProps.title" v-slot:header="{ title }">
          <SbMinibrowserListHeader :title="title">
            <template v-slot:right>
              <button> Slot button </button>
            </template>
          </SbMinibrowserListHeader>
        </template>
      </SbMinibrowserList>
    </template>
  </SbMinibrowser>
`,
  `<div style="padding: 10px; border: 1px solid #B1B5BE; border-radius: 5px; max-width: 367px;">
    <p style="font-size: 16px"> Inline Minibrowser </p>
    <SbMinibrowser
      :is-loading="internalLoading"
      :breadcrumbs="internalBreadcrumbs"
      :options="internalOptions"
      :is-list="isList"
      :is-expanded="isExpanded"
      :is-full-height="isFullHeight"
      :is-borderless="isBorderless"
      :filter-debounce="filterDebounce"
      :not-found-prefix="notFoundPrefix"
      :placeholder="placeholder"
      :clear-on-select="clearOnSelect"
      @filter="handleFilter"
      @clear-navigation="handleClearNavigation"
      @navigate="handleNavigate"
      @select-item="handleSelectItem"
    />
  </div>
`,
  `<div>
    <SbButton
      label="Open Modal!"
      variant="primary"
      @click="handleShowModal"
      v-if="!showModal"
      style="margin: 0 auto; display: flex; margin-top: 30%;"
    />
    <SbModal
      :is-open="showModal"
      :full-width="fullWidth"
      @hide="showModal = false"
    >
      <SbModalHeader
        v-bind="{
          title,
          icon,
          align,
        }"
      />

      <SbModalContent>
        <p style="text-align:center">The body copy that explains empty state</p>
      </SbModalContent>

      <SbModalFooter>
        <SbButton label="Label" variant="primary"/>
        <SbButton label="Label" variant="tertiary"/>
      </SbModalFooter>

    </SbModal>
  </div>
`,
  `<div>
    <SbButton
      label="Open Modal!"
      :variant="buttonVariant"
      @click="handleShowModal"
      style="margin: 0 auto; display: flex; margin-top: 30%;"
    />
    <SbModalType
      ref="modal"
      :title="title"
      :align="align"
      :message="message"
      :type="type"
      :cancelButtonLabel="cancelButtonLabel"
      :actionButtonLabel="actionButtonLabel"
    />
  </div>
`,
  `<div>
  <SbButton
    label="Open Modal!"
    variant="primary"
    @click="handleShowModal"
    v-if="!showModal"
    style="margin: 0 auto; display: flex; margin-top: 30%;"
  />
  <SbModal :is-open="showModal" v-on:hide="showModal = false">
    <SbModalHeader
      v-bind="{
        title,
      }"
    />

    <SbModalContent>
      <p style="font-size: 16px; color: rgb(84, 91, 111); text-align: center;">The body copy that explains empty state</p>
    </SbModalContent>

    <SbButton label="Click me!" variant="primary" style="margin: 0 auto;display: flex"/>
  </SbModal>
</div>
`,
  `<div>
  <SbButton
    label="Open Modal!"
    variant="primary"
    @click="handleShowModal"
    v-if="!showModal"
    style="margin: 0 auto; display: flex; margin-top: 30%;"
  />
  <SbModal :is-open="showModal" v-on:hide="showModal = false">
    <SbModalContent>
      <p style="text-align: center;">This awesome dont have Title or Header!</p>
    </SbModalContent>

    <SbModalFooter>
      <SbButton label="Click me!" variant="primary"/>
    </SbModalFooter>
  </SbModal>
</div>`,
  `<div>
  <SbButton
    label="Open Modal!"
    variant="primary"
    @click="handleShowModal"
    v-if="!showModal"
    style="margin: 0 auto; display: flex; margin-top: 30%;"
  />
  <SbModal :is-open="showModal" v-on:hide="showModal = false">
    <SbModalHeader :align="align" :title="title" />

    <SbModalContent>
      <div style="width: 100%; height: 300px;"><p style="text-align: left; margin: 0;">The body copy that explains empty state</p></div>
    </SbModalContent>

    <SbModalFooter>
      <SbButton label="Label" variant="primary"/>
      <SbButton label="Label" variant="tertiary"/>
    </SbModalFooter>
  </SbModal>
</div>`,
  `<div>
  <SbButton
    label="Open Modal!"
    variant="primary"
    @click="handleShowModal"
    v-if="!showModal"
    style="margin: 0 auto; display: flex; margin-top: 30%;"
  />
  <SbModal :is-open="showModal" :esc-closes="true" v-on:hide="showModal = false">
    <SbModalHeader :align="align" :title="title" />

    <SbModalContent>
      <div style="width: 100%; height: 300px;"><p style="text-align: left; margin: 0;">The body copy that explains empty state</p></div>
    </SbModalContent>

    <SbModalFooter>
      <SbButton label="Label" variant="primary"/>
      <SbButton label="Label" variant="tertiary"/>
    </SbModalFooter>
  </SbModal>
</div>`,
  `<div>
  <SbButton
    label="Open Modal!"
    variant="primary"
    @click="handleShowModal"
    v-if="!showModal"
    style="margin: 0 auto; display: flex; margin-top: 30%;"
  />
  <SbModal :is-open="showModal" v-on:hide="showModal = false" close-on-header>
    <SbModalHeader :align="align" :title="title" />
    <SbModalContent>
      <div style="width: 100%;"><p style="text-align: left; margin: 0;">This Modal has a Close button on the header !</p></div>
    </SbModalContent>
  </SbModal>
</div>`,
  `<div id="boxModal" style="width: 500px; height: 400px">
  <SbButton
    label="Open Modal!"
    variant="primary"
    @click="handleShowModal"
    v-if="!showModal"
    style="margin: 0 auto; display: flex; margin-top: 30%;"
  />
  <SbModal :is-open="showModal" v-on:hide="showModal = false" disabled-target-default="true" target="#boxModal" overlay-position="relative" >
    <SbModalContent>
      <div style="width: 100%;"><p style="text-align: left; margin: 0;">This modal opens inside the div with id "boxModal"</p></div>
    </SbModalContent>
  </SbModal>
</div>`,
  `<SbNotification
    v-bind="args"
  />`,
  `<div>
  <SbNotification
  v-bind="args"
    status="positive"
  />
  <SbNotification
  v-bind="args"
    status="general"
  />
  <SbNotification
  v-bind="args"
    status="warning"
  />
  <SbNotification
  v-bind="args"
   status="info"
    />
  <SbNotification
  v-bind="args"
    status="negativ"
    />
</div>`,
  `<div>
  <SbNotification
    v-bind="args"
      status="positive"
    />
  <SbNotification
    v-bind="args"
    status="positive"
    description="This is a awesome component from Storyblok DS."
    link="http://#"
    />
  <SbNotification
    v-bind="args"
    status="negative"
    isFull="true"
    />
  <SbNotification
    v-bind="args"
    status="negative"
    description="This is a awesome component from Storyblok Desing Sistem"
    link="http://#"
    isFull="true"
    />
</div>`,
  `<div>
  <SbNotification
      v-bind="args"
      status="info"
      description="This is a awesome component from Storyblok Desing Sistem"
      link="http://#"
      isExpandable="true"
      />

  <br />

  <SbNotification
    v-bind="args"
    status="info"
    description="This is a awesome component from Storyblok Desing Sistem"
    isExpandable="true"
    link="http://#"
    isFull="true"
  />
</div>`,
  `<div style="max-width: 300px">
    <SbNumberField
      style="margin-bottom: 20px;"
      v-model="internalValue"
      v-bind="args"
      label="Number input"
    />

    <SbNumberField
      style="margin-bottom: 20px;"
      v-model="internalValue"
      v-bind="args"
      label="Max: 10 and Min: -10"
    />

    <SbNumberField
      v-model="internalValue"
      style="margin-bottom: 20px;"
      v-bind="args"
      label="Step: 0.5"
    />

    <SbNumberField
      style="margin-bottom: 20px;"
      v-model="internalValue"
      v-bind="args"
      label="Precision of 3 decimals"
    />

    <SbNumberField
      style="margin-bottom: 20px;"
      v-model="internalValue"
      v-bind="args"
      label="Disabled input"
      disabled
    />

    <SbNumberField
      style="margin-bottom: 20px;"
      v-model="internalValue"
      v-bind="args"
      label="Readonly input"
      readonly
    />
  </div>
`,
  `<div style="padding: 20px; margin-top: 250px">
    <SbPagination
      v-bind="args"
      :per-page="perPageData"
      v-model="currentPage"
      @page-change="onPageChange"
      @per-page-change="onPageChangeData"
    />
  </div>
`,
  `<div>
    <SbButton id="buttontest" label="Click me" @click="handleClick" />

    <SbPopover
      ref="popover"
      :reference="reference"
      :placement="placement"
      :is-open="isOpen"
    >
      <ul style="background-color: #BBBBBB;">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </SbPopover>
  </div>
`,
  `<div>
    <SbButton id="buttontest" label="Click me" @click="handleClick" />

    <SbPopover
      ref="popover"
      :reference="reference"
      :placement="placement"
      :is-open="isOpen"
      use-portal
      use-portal-target="#custom-target-el"
    >
      <ul style="background-color: #BBBBBB;">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </SbPopover>

    <div id="custom-target-el">
      <p>Portal Target</p>
    </div>
  </div>
`,
  `<SbRadio
    v-bind="args"
    v-model="internalValue"
  />
`,
  `<div>
    <SbRadio
      style="margin-bottom: 10px;"
      id="Jon Doe"
      label="Jon Doe"
      v-model="internalValue"
      name="input"
      native-value="Jon Doe"
      selected
    />

    <SbRadio
      style="margin-bottom: 10px;"
      id="Albert Einstein"
      label="Albert Einstein"
      v-model="internalValue"
      name="input"
      native-value="Albert Einstein"
    />

    <SbRadio
      style="margin-bottom: 10px;"
      id="Herbert Hoover"
      label="Herbert Hoover"
      v-model="internalValue"
      name="input"
      native-value="Herbert Hoover"
      outline
    />
  </div>
`,
  `<div>
    <div style="margin-bottom: 20px;">
      <SbRadio
        style="margin-right: 10px;"
        name="radio-inline"
        id="inline-j"
        label="Jon Doe"
        v-model="internalValue"
        native-value="Jon Doe"
        inline
      />

      <SbRadio
        style="margin-right: 10px;"
        name="radio-inline"
        id="inline-selected"
        label="Albert Einstein"
        v-model="internalValue"
        native-value="Albert Einstein"
        inline
      />

      <SbRadio
        style="margin-right: 10px;"
        name="radio-inline"
        id="inline-disabled"
        v-model="internalValue"
        native-value="None of those"
        label="None of those"
        inline
        disabled
      />
    </div>
  </div>
`,
  `<div>
      <SbRadio
        style="margin-right: 10px;"
        name="radio-outline"
        id="inline-b"
        label="Jon Doe"
        v-model="internalValue"
        native-value="Jon Doe"
        inline
        outline
      />

      <SbRadio
        style="margin-right: 10px;"
        name="radio-outline"
        id="inline-b-selected"
        label="Albert Einstein"
        v-model="internalValue"
        native-value="Albert Einstein"
        inline
        outline
      />

      <SbRadio
        style="margin-right: 10px;"
        name="radio-outline"
        id="inline-b-disabled"
        v-model="internalValue"
        native-value="None of those"
        label="None of those"
        inline
        outline
        disabled
      />
    </div>
`,
  `<div style="min-height: 300px;">
    <SbSelect
      v-bind="args"
      v-model="internalValue"
      style="max-width: 300px"
      @option-created="handleOptionCreated"
  />
  </div>
  `,
  `<div style="min-height: 300px">
  <SbSelect
    v-bind="args"
    v-model="internalValue"
    style="max-width: 300px"
    @filter="handleFilter"
  />
  </div>
`,
  `<div style="min-height: 300px">
    <SbSelect
      ref="select"
      v-bind="args"
      v-model="internalValue"
      style="max-width: 300px"
    >
      <template #minibrowser>
      <SbMinibrowser
        :options="args.minibrowserOptions"
        @select-item="onSelectItem"
        @close="handleCloseBrowser"
      />
      </template>
    </SbSelect>
  </div>
`,
  `<div>
    <div style="min-height: 300px">
      <h2 style="margin-bottom: 10px"> Single Select </h2>

      <SbSelect
        v-bind="args"
        emit-option
        :modelValue="singleSelectValue"
        @update:modelValue="handleSingleSelect"
        style="max-width: 300px"
      />

      <p class="font-medium text-ink font-size-lg">
        Selected value {{ singleSelectValue }}
      </p>
      <p class="font-medium text-ink font-size-lg">
        Selected option {{ singleSelectOption }}
      </p>
    </div>

    <h2 style="margin-bottom: 10px"> Multiple Select </h2>

    <SbSelect
      v-bind="args"
      multiple
      emit-option
      v-model="multipleSelectValue"
      style="max-width: 300px"
    />

    <p class="font-medium text-ink font-size-lg">
      Selected value {{ multipleSelectValue }}
    </p>
  </div>
`,
  `<div>
    <div style="min-height: 300px;">
      <h2 style="margin-bottom: 10px"> Typed value {{ searchInput }} </h2>

      <SbSelect
        v-bind="args"
        emit-search
        emit-option
        :modelValue="searchInput"
        @input="handleSearchValue"
        style="max-width: 300px"
      />
    </div>
  </div>
`,
  `<SbSeparator v-bind="args" />
`,
  `<SbSeparator small />
`,
  `<SbSeparator :is-flat="false" />
`,
  `<SbSidebar>
  <SbSidebarListItem
    icon="partner-team"
    icon-right="chevron-down"
    label="Apps"
    class="sb-sidebar-item--parent"
  >
    <SbSidebarListItem
      label="Other activities"
      icon="puzzle"
      is-child
    />
  </SbSidebarListItem>
  <template #bottom>
    <SbSidebarListItem
      href="#"
      icon="settings"
      label="Report a problem"
    />
    <SbSidebarListItem
      :avatar="{
        src: 'https://avatars1.githubusercontent.com/u/160495?s=460&u=b88ece40883d2e9716e833f6a3c78c56ca3eb14f&v=4',
        name: 'Alexander Feiglstorfer'
      }"
      label="My account"
      ref="userDropdown"
      @click="openUserDropdown = !openUserDropdown"
    >
      <SbMenu v-model="openUserDropdown">
        <SbMenuList placement="top" :reference="$refs.userDropdown">>
          <div #top style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #dfe3e8; padding: 15px 20px; margin-bottom: 10px;">
            <div>
              <p style="font-size: 14px; font-weight: 500; color: #1b243f; margin: 0; margin-bottom: 5px;"> John Doe </p>
              <p style="font-size: 12px; color: #b1b5be; margin: 0;"> jondoe@lipsum.com </p>
            </div>

            <SbIcon name="log-out" color="light-gray" size="small" />
          </div>

          <SbMenuItem> Account settings </SbMenuItem>
          <SbMenuItem> Security settings </SbMenuItem>
          <SbMenuItem> Personal access tokens </SbMenuItem>
          <SbMenuItem> Privacy settings </SbMenuItem>
          <SbMenuItem> Change language </SbMenuItem>
        </SbMenuList>
      </SbMenu>
    </SbSidebarListItem>
  </template>
</SbSidebar>
`,
  `<div>
    <SbButton
      label="Open Slideover!"
      @click="handleToggleSlide"
      style="margin: 0 auto; display: flex; margin-top: 30%;"/>

    <SbSlideover :is-open="show" v-bind="args" @hide="handleToggleSlide">

      <SbModalHeader :title="args.title" align="left" />

      <SbModalContent style="flex: 1;">
        <p>Storyblok helps your team to tell your story and...</p>
      </SbModalContent>

      <SbModalFooter>
        <SbButton label="Label" variant="primary"/>
        <SbButton label="Label" variant="tertiary"/>
      </SbModalFooter>
    </SbSlideover>
  </div>
`,
  `<div>
    <SbButton
      label="Open Slideover!"
      @click="handleToggleSlide"
      style="margin: 0 auto; display: flex; margin-top: 30%;"/>

    <SbSlideover :is-open="show" v-bind="args" @hide="handleToggleSlide" >

      <SbModalHeader title="Hi man" align="left" />

      <SbModalContent style="flex: 1;">
        <p>Storyblok helps your team to tell your story and...</p>
      </SbModalContent>
    </SbSlideover>
  </div>
`,
  `<div>
    <SbButton
      label="Open Slideover!"
      @click="handleToggleSlide"
      style="margin: 0 auto; display: flex; margin-top: 30%;"/>

    <SbSlideover :is-open="show" v-bind="args" @hide="handleToggleSlide">

      <SbModalHeader title="Hi man" align="left" />

      <SbModalContent style="flex: 1;">
        <p>Storyblok helps your team to tell your story and manage
        content for every use-case: corporate websites, e-commerce,
        helpdesks, mobile apps, and screen displays.</p>
      </SbModalContent>
    </SbSlideover>
  </div>
`,
  `<div style="max-width: 300px">
    <SbTextField
      :id="id"
      :name="name"
      :label="label"
      :disabled="disabled"
      :required="required"
      :placeholder="placeholder"
      :readonly="readonly"
      :native-valueargs.="nativeValue"
      v-model="internalValue"
    /><br>
    <SbTextField
      :id="id"
      :name="name"
      label="With remaining characters counter"
      :disabled="disabled"
      :required="required"
      :placeholder="placeholder"
      :readonly="readonly"
      :maxlength="maxlength"
      :native-valueargs.="nativeValue"
      v-model="internalValue"
    /><br>
    <SbTextField
      :id="id"
      :name="name"
      label="Disabled text input"
      :required="required"
      :placeholder="placeholder"
      :native-valueargs.="nativeValue"
      v-model="internalValue"
      disabled
    /><br>
    <SbTextField
      :id="id"
      :name="name"
      label="Read only"
      :disabled="disabled"
      :required="required"
      :placeholder="placeholder"
      :native-valueargs.="nativeValue"
      v-model="internalValue"
      readonly
    /><br>
    <SbTextField
      :id="id"
      :name="name"
      label="With error"
      :disabled="disabled"
      :required="required"
      :placeholder="placeholder"
      iconRight="square-error"
      native-value="Some text with error"
      v-model="internalValue"
      :errorMessage="errorMessage"
      error
    /><br>
    <SbTextField
    :id="id"
    :name="name"
    label="With error but no icon"
    :disabled="disabled"
    :required="required"
    :placeholder="placeholder"
    iconRight=""
    native-value="Some text with error but no icon"
    v-model="internalValue"
    :errorMessage="errorMessage"
    error
  /><br>
    <SbTextField
      :id="id"
      :name="name"
      label="Clearable"
      :disabled="disabled"
      :required="required"
      :placeholder="placeholder"
      native-value="Boris Spassky"
      v-model="internalValue"
      clearable
    /><br>
    <SbTextField
      :id="id"
      :name="name"
      label="Show / Hide password"
      :disabled="disabled"
      :required="required"
      :placeholder="placeholder"
      iconRight="eye"
      type="password"
      native-value="Boris Spassky"
      v-model="internalValue"
    /><br>
    <SbTextField
      :id="id"
      :name="name"
      label="With max length"
      :disabled="disabled"
      :required="required"
      :placeholder="placeholder"
      :readonly="readonly"
      maxlength="200"
      v-model="internalValue"
    /><br>
    <SbTextField
      :id="id"
      :name="name"
      label="With inline label"
      inline-label="User:"
      :disabled="disabled"
      :required="required"
      :placeholder="placeholder"
      :readonly="readonly"
      v-model="internalValue"
    /><br>
  </div>
`,
  `<div style="max-width: 300px">
    <SbTextField
      :id="id"
      :name="name"
      label="With icon before"
      :disabled="disabled"
      :required="required"
      :placeholder="placeholder"
      :readonly="readonly"
      iconLeft="search"
      native-value="Boris Spassky"
      v-model="internalValue"
    /><br>
    <SbTextField
      :id="id"
      :name="name"
      label="With icon after"
      :disabled="disabled"
      :required="required"
      :placeholder="placeholder"
      :readonly="readonly"
      iconRight="search"
      native-value="Boris Spassky"
      v-model="internalValue"
    /><br>
    <SbTextField
      :id="id"
      :name="name"
      label="Ghost with icon before"
      :disabled="disabled"
      :required="required"
      :placeholder="placeholder"
      :readonly="readonly"
      iconLeft="search"
      native-value="Boris Spassky"
      v-model="internalValue"
      ghost
    /><br>
    <SbTextField
      :id="id"
      :name="name"
      label="Ghost with icon after"
      :disabled="disabled"
      :required="required"
      :placeholder="placeholder"
      :readonly="readonly"
      iconRight="search"
      native-value="Boris Spassky"
      v-model="internalValue"
      ghost
    /><br>
    <SbTextField
      :id="id"
      :name="name"
      label="Default clearable with icon"
      :disabled="disabled"
      :required="required"
      :placeholder="placeholder"
      iconLeft="search"
      native-value="Boris Spassky"
      v-model="internalValue"
      clearable
    /><br>
    <SbTextField
      :id="id"
      :name="name"
      label="Ghost clearable with icon"
      :disabled="disabled"
      :required="required"
      :placeholder="placeholder"
      iconLeft="search"
      native-value="Boris Spassky"
      v-model="internalValue"
      clearable
      ghost
    /><br>
  </div>
`,
  `<div style="max-width: 300px">
    <SbTextField
      :id="id"
      :name="name"
      :label="label"
      :disabled="disabled"
      :required="required"
      :placeholder="placeholder"
      :readonly="readonly"
      native-value="Boris Spassky"
      v-model="internalValue"
      ghost
    /><br>
    <SbTextField
      :id="id"
      :name="name"
      label="Clearable"
      :disabled="disabled"
      :required="required"
      :placeholder="placeholder"
      native-value="Boris Spassky"
      v-model="internalValue"
      clearable
      ghost
    /><br>
    <SbTextField
      :id="id"
      :name="name"
      label="Show / Hide password"
      :disabled="disabled"
      :required="required"
      :placeholder="placeholder"
      iconRight="eye"
      type="password"
      native-value="Boris Spassky"
      v-model="internalValue"
      ghost
    /><br>
  </div>
`,
  `<div style="max-width: 300px">
    <SbTextField
      :id="id"
      :name="name"
      label="With text before"
      :disabled="disabled"
      :required="required"
      :placeholder="placeholder"
      :prefix="prefix"
      :readonly="readonly"
      native-value="Boris Spassky"
      v-model="internalValue"
    /><br>
    <SbTextField
      :id="id"
      :name="name"
      label="With text after"
      :disabled="disabled"
      :required="required"
      :placeholder="placeholder"
      :readonly="readonly"
      :suffix="suffix"
      native-value="Boris Spassky"
      v-model="internalValue"
    /><br>
  </div>
`,
  `<div style="max-width: 300px">
    <SbTextField
      type="textarea"
      :id="id"
      :name="name"
      label="Textarea element"
      :disabled="disabled"
      :required="required"
      :placeholder="placeholder"
      :readonly="readonly"
      native-value="Boris Spassky"
      :maxlength="maxlength"
      v-model="internalValue"
    /><br>
  </div>
`,
  `<div style="max-width: 300px">
    <SbTextField
      :id="id"
      :name="name"
      label="With mask"
      :disabled="disabled"
      :required="required"
      :placeholder="placeholder"
      :readonly="readonly"
      native-value="Boris Spassky"
      v-model="internalValue"
      :mask="mask"
    /><br>
  </div>
`,
  `<div style="max-width: 300px">
    <SbTextField
      v-model="internalValue"
      label="With inline label"
      :name="name"
      :id="id"
      :disabled="disabled"
      :required="required"
      :placeholder="placeholder"
      :readonly="readonly"
      :inline-label="inlineLabel"
      native-value="Boris Spassky"
    />
  </div>
`,
  `<div>
    <SbToggle
      :name="name"
      id="inactive"
      label="Inactive"
      :modelValue="modelValue"
      :disabled="disabled"
      :required="required"
      :icon="icon"
      :variant="variant"
      style="margin-bottom: 10px;"
    /><br>

    <SbToggle
      :name="name"
      id="active"
      label="Active"
      :modelValue="true"
      :disabled="disabled"
      :required="required"
      :icon="icon"
      :variant="variant"
      style="margin-bottom: 10px;"
    /><br>

    <SbToggle
      :name="name"
      id="inactive-disabled"
      label="Inactive - Disabled"
      :modelValue="modelValue"
      :required="required"
      :icon="icon"
      :variant="variant"
      disabled
    /><br>

  </div>
`,
  `<div>
    <div style="margin-bottom: 20px">
      <SbToggle
        id="selected"
        label="With Icon Inactive"
        :name="name"
        :modelValue="false"
        icon="globe"
        :variant="variant"
        native-value="With Icon Inactive"
        style="margin-bottom: 10px;"
      /><br>
    </div>
  </div>
`,
  `<div>
    <SbToggle
      id="default-variant"
      label="Default Variant"
      :name="name"
      :modelValue="true"
      :icon="icon"
      :variant="'primary'"
      native-value="Default Variant"
      style="margin-bottom: 10px;"
    /><br>

    <SbToggle
      id="secondary-variant"
      label="Secondary Variant"
      :name="name"
      :modelValue="true"
      :icon="icon"
      :variant="'secondary'"
      native-value="Secondary Variant"
      style="margin-bottom: 10px;"
    /><br>

    <SbToggle
      id="ghost-variant"
      label="Ghost Variant"
      :name="name"
      :modelValue="true"
      :icon="icon"
      :variant="'ghost'"
      native-value="Ghost Variant"
      style="margin-bottom: 10px;"
    /><br>

    <SbToggle
      id="danger-variant"
      label="Danger Variant"
      :name="name"
      :modelValue="true"
      :icon="icon"
      :variant="'danger'"
      native-value="Danger Variant"
      style="margin-bottom: 10px;"
    /><br>
  </div>
`,
  `<div style="padding: 100px; text-align: center;">
    <SbTooltip v-bind="args">
      <span style="font-size: 1.8rem;">Hover me!</span>
    </SbTooltip>
  </div>
`,
  `<SbUploadDialog
    v-bind="args"
  />
`,
  `<div style="padding: 100px; text-align: center;">
    <span tabindex="0" v-tooltip="{ label, position, id, variant, textAlign }" style="font-size: 1.8rem;">Hover me!</span>
  </div>
`,
]
