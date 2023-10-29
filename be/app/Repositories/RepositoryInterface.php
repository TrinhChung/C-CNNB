<?php

namespace App\Repositories;

interface RepositoryInterface
{
    /**
     * Get all
     *
     * @return mixed
     */
    public function getAll();

    /**
     * Get one
     *
     * @return mixed
     */
    public function find($id);

    /**
     * Create
     *
     * @return mixed
     */
    public function create(array $attributes);

    /**
     * Update
     *
     * @return mixed
     */
    public function update($id, array $attributes);

    /**
     * Delete
     *
     * @return mixed
     */
    public function delete($id);

    public function getAllPaginate(int $amountPerPage);
}
