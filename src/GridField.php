<?php

namespace TractorCow\ReactGridField;

use SilverStripe\Forms\FormField;

class GridField extends FormField
{
    protected $schemaDataType = FormField::SCHEMA_DATA_TYPE_CUSTOM;

    protected $schemaComponent = 'GridField';

    public function getSchemaData()
    {
        $schema =  parent::getSchemaData();
        return $schema;
    }
}
