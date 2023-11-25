<?php

namespace App\Exports;

use App\Models\Task;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class TaskExport implements FromCollection, withHeadings
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return Task::where('status', '1')->get();
    }

    public function headings(): array
    {
        $model = new Task();

        return $model->getConnection()->getSchemaBuilder()->getColumnListing($model->getTable());
    }
}
