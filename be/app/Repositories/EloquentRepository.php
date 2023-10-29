<?php

namespace App\Repositories;

abstract class EloquentRepository implements RepositoryInterface
{
    /**
     * @var \Illuminate\Database\Eloquent\Model
     */
    protected $_model;

    /**
     * EloquentRepository constructor.
     */
    public function __construct()
    {
        $this->setModel();
    }

    /**
     * get model
     *
     * @return string
     */
    abstract public function getModel();

    /**
     * Set model
     */
    public function setModel()
    {
        $this->_model = app()->make(
            $this->getModel()
        );
    }

    /**
     * Get All
     *
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function getAll()
    {

        return $this->_model->all();
    }

    /**
     * Get one
     *
     * @return mixed
     */
    public function find($id)
    {
        $result = $this->_model->find($id);

        return $result;
    }

    /**
     * Create
     *
     * @return mixed
     */
    public function create(array $attributes)
    {
        //dd($attributes);
        return $this->_model->create($attributes);
    }

    /**
     * Update
     *
     * @return bool|mixed
     */
    public function update($id, array $attributes)
    {
        $result = $this->find($id);
        if ($result) {
            $result->update($attributes);

            return $result;
        }

        return false;
    }

    /**
     * Delete
     *
     * @return bool
     */
    public function delete($id)
    {
        $result = $this->find($id);
        if ($result) {
            $result->delete();

            return true;
        }

        return false;
    }

    public function getAllPaginate($amountPerPage)
    {
        return $this->_model->paginate($amountPerPage);
    }
}
