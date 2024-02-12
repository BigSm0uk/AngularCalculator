import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface CalcGroup {
  firstValue: CalcVar;
  secondValue: CalcVar;
  operation: CalcOperations;
}

interface CalcVar {
  value: number;
  modificator: CalcModifieres;
}

enum CalcOperations {
  plus = '+',
  minus = '-',
  divide = '/',
  multiply = '*',
}
enum CalcModifieres {
  none = 'none',
  sin = 'sin',
  cos = 'cos',
  sqrt = 'sqrt',
}

@Component({
  selector: 'app-my-calulator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './my-calulator.component.html',
  styleUrl: './my-calulator.component.scss',
})
export class MyCalulatorComponent {
  calcOperation = CalcOperations;
  calcModifieres = CalcModifieres;
  calcGroups: CalcGroup[] = [
    {
      firstValue: {
        value: 5,
        modificator: CalcModifieres.none,
      },
      secondValue: {
        value: 5,
        modificator: CalcModifieres.none,
      },
      operation: CalcOperations.plus,
    },
  ];
  history: string[] = [];
  operationsBetweenGroups: CalcOperations[] = [];
  result?: number;

  addGroup(): void {
    this.calcGroups.push({
      firstValue: {
        value: 0,
        modificator: CalcModifieres.none,
      },
      secondValue: {
        value: 0,
        modificator: CalcModifieres.none,
      },
      operation: CalcOperations.plus,
    });
    this.operationsBetweenGroups.push(this.calcOperation.plus);
  }
  removeGroup(index: number): void {
    this.calcGroups.splice(index, 1);
    this.operationsBetweenGroups.splice(index - 1, 1);
  }

  calcGroup() {
    let result = 0;
    let tempHistory: string[] = [];
    this.calcGroups.forEach((group, i) => {
      if (i === 0) {
        result = this.calc(
          this.calcValueWithModificator(group.firstValue),
          this.calcValueWithModificator(group.secondValue),
          group.operation
        );
      } else {
        let tempResult = this.calc(
          this.calcValueWithModificator(group.firstValue),
          this.calcValueWithModificator(group.secondValue),
          group.operation
        );
        result = this.calc(
          result,
          tempResult,
          this.operationsBetweenGroups[i - 1]
        );
      }
      tempHistory.push(
        `${
          group.firstValue.modificator !== CalcModifieres.none
            ? group.firstValue.modificator
            : ''
        } ${group.firstValue.value} 
          ${group.operation}
          ${
            group.secondValue.modificator !== CalcModifieres.none
              ? group.secondValue.modificator
              : ''
          }
          ${group.secondValue.value}
          ${
            this.operationsBetweenGroups.length > i
              ? this.operationsBetweenGroups[i]
              : ''
          }`
      );
    });
    tempHistory.push(`=${result}`);
    this.history.push(tempHistory.join(' '));
    this.result = result;
  }

  calcValueWithModificator(value: CalcVar): number {
    switch (value.modificator) {
      case CalcModifieres.none:
        return value.value;
      case CalcModifieres.cos:
        return Math.cos(value.value);
      case CalcModifieres.sin:
        return Math.sin(value.value);
      case CalcModifieres.sqrt:
        return Math.sqrt(value.value);
    }
  }

  calc(
    firstValue: number,
    secondValue: number,
    operation: CalcOperations
  ): number {
    switch (operation) {
      case CalcOperations.plus:
        return firstValue + secondValue;
      case CalcOperations.minus:
        return firstValue - secondValue;
      case CalcOperations.divide:
        return firstValue / secondValue;
      case CalcOperations.multiply:
        return firstValue * secondValue;
    }
  }
}
