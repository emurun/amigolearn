import { Datagrid, List, TextInput, SimpleForm, Create, required, ReferenceInput, BooleanInput } from "react-admin";

export const ChallengeOptionCreate = () => {
  return (
    <Create>
      <SimpleForm>

        <TextInput source="text" validate={[required()]} label="text" />
        <BooleanInput source="correct" label="Correct option" />
        <ReferenceInput source="challengeId" reference="challenges" />
        <TextInput source="imageSrc" label="Image URL" />
        <TextInput source="audioSrc" label="Audio URL" />

      </SimpleForm>
    </Create>
  )
} 