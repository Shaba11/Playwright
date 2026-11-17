const fs = require('fs');
import fs from 'fs';
import path  from 'path';
import { parse } from 'csv-parse/sync';

function ReadCSV() {

 const records = parse (
    fs.readFileSync(path.join(__dirname,"../test-data/qa/testdata.csv")),
    {
        columns:true,
        skip_empty_lines:true,
    });
}