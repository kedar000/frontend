import { useEffect, useReducer, useState } from "react";
import type { Employee } from "../types/employee.types";
import employeeService from "../services/employee.service";
// import Loading from '../../../react_revision/components/lazy/Loading';

type EmployeeState = {
  employees: Employee[];
  loading: boolean;
  error: string;
};

type EmployeeAction =
  | { type: "FETCH_START" }
  | {
      type: "FETCH_SUCCESS";
      payload: Employee[];
    }
  | {
      type: "FETCH_ERROR";
      payload: string;
    };

const initialState: EmployeeState = {
  employees: [],
  loading: true,
  error: "",
};

function employeeReducer(
  state: EmployeeState,
  action: EmployeeAction,
): EmployeeState {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        loading: true,
        error: "",
      };

    case "FETCH_SUCCESS":
      return {
        employees: action.payload,
        loading: false,
        error: "",
      };

    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}

export function useEmployee() {
  const [state, dispatch] = useReducer(employeeReducer, initialState);

  //write useeffect
  useEffect(() => {
    fetchEmployees();
  }, []);

  async function fetchEmployees() {
    try {
      dispatch({
        type: "FETCH_START",
      });
      debugger
      const data = await employeeService.getEmployees();

      dispatch({
        type: "FETCH_SUCCESS",
        payload: data,
      });
    } catch {
      dispatch({
        type: "FETCH_ERROR",
        payload: "Unable to fetch Employees",
      });
    }
  }

  return {
    employees: state.employees,
    loading: state.loading,
    error: state.error,
  };
}
